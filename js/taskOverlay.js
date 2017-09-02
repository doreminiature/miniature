function addTaskFromOverlay() {
    tasks.setSelected(tasks.add())
    addTab()
    rerenderTabstrip()
    // taskOverlay.hide()
}

var overlay = document.getElementById('task-overlay')
var taskContainer = document.getElementById('task-area')
var taskSwitcherButton = document.getElementById('switch-task-button')
var addTaskButton = document.getElementById('add-task')
var navbar = document.getElementById('task-overlay-navbar')

taskSwitcherButton.addEventListener('click', function () {
    taskOverlay.toggle()
})

addTaskButton.addEventListener('click', function (e) {
    switchToTask(tasks.addInStart())
    // CT.addCollectionTab()
    // tabs.add({}, tabs[0])
    // switchToTask(tasks.addInStart())
    navigate(tabState.tasks[0].tabs[0].id, 'file:///' + __dirname + '/pages/collection/index.html')
    CT.render()
    F._setCollectionFaviconOnId(tabState.tasks[0].tabs[0].id)
})

var webviews = document.getElementById("webviews")

taskSwitcherButton.addEventListener('click', function () {

    if (overlay.style.opacity != '1') {
        overlay.style.opacity = "1"
    }

})


function getTaskOverlayTabElement(tab, task) {

    var item = createSearchbarItem({
        title: tab.title || 'New Tab',
        secondaryText: urlParser.removeProtocol(tab.url),
        classList: ['task-tab-item'],
        delete: function () {
            task.tabs.destroy(tab.id)
            destroyWebview(tab.id)

            // if there are no tabs left, remove the task

            if (task.tabs.count() === 0) {
                destroyTask(task.id)
                if (tasks.get().length === 0) {
                    addTaskFromOverlay()
                } else {
                    // re-render the overlay to remove the task element
                    getTaskContainer(task.id).remove()
                }
            }
        }
    })

    item.setAttribute('data-tab', tab.id)
    item.setAttribute('data-task', task.id)

    return item
}

function getTaskElement(task, taskIndex) {
    var container = document.createElement('div')
    container.className = 'task-container'

    container.setAttribute('data-task', task.id)

    var taskActionContainer = document.createElement('div')
    taskActionContainer.className = 'task-action-container'

    // add the input for the task name

    var input = document.createElement('input')
    input.classList.add('task-name')

    // input.placeholder = 'Task ' + (taskIndex + 1)
    input.placeholder = '●●●'

    // input.value = task.name || 'Task ' + (taskIndex + 1)
    input.value = task.name || ''

    input.addEventListener('keyup', function (e) {
        if (e.keyCode === 13) {
            this.blur()
        }
        tasks.update(task.id, {name: this.value})
    })

    input.addEventListener('click', function (e) {
        tabState.selectedTask = this.parentNode.parentNode.dataset.task
        switchToTask(this.parentNode.parentNode.dataset.task)
        sessionRestore.save()
        CT.render()
    })

    input.addEventListener('focusout', function (e) {
        taskOverlay.inputFocus = true
    })

    input.addEventListener('focus', function (e) {
        taskOverlay.inputFocus = false
    })

    taskActionContainer.appendChild(input)

    // delete button

    var deleteButton = document.createElement('i')
    deleteButton.className = 'fa fa-trash-o'

    deleteButton.addEventListener('click', function (e) {


        if (task.id == tabState.selectedTask) {
            CT.goToCollectionID(tabState.selectedTask)
            goTo = tabState.selectedTask
        }

        destroyTask(task.id)
        CT.add5()

        sessionRestore.save()
        CT.render()

    })

    taskActionContainer.appendChild(deleteButton)

    container.appendChild(taskActionContainer)

    var tabContainer = document.createElement('div')
    tabContainer.className = 'task-tabs-container'

    if (task.tabs) {
        for (var i = 0; i < task.tabs.length; i++) {

            // add favicon
            var img = document.createElement('img')
            img.classList.add('favicon')
            if (task.tabs[i].url == ('file:///' + path.join(__dirname) + '/pages/collection/index.html').replace(/\\/g, "/")) {
                try {
                    for (let j = 0; j < F.DB.length; j++) {
                        if (F.DB[j].url == 'collection') {
                            img.src = F.DB[j].base64
                        }
                    }
                } catch (e) {
                }
            } else {
                try {
                    let hostTab = F._urlToHost(task.tabs[i].url)
                    if (hostTab != '') {
                        try {
                            for (let j = 0; j <= F.DB.length; j++) {
                                if (F.DB[j].url == hostTab) {
                                    img.src = F.DB[j].base64
                                }
                            }
                        } catch (e) {
                        }
                    }
                } catch (e) {
                }
            }
            tabContainer.appendChild(img)
            // add favicon //

            var el = getTaskOverlayTabElement(task.tabs[i], task)

            el.addEventListener('click', function (e) {
                switchToTask(this.getAttribute('data-task'))
                switchToTab(this.getAttribute('data-tab'))

                // taskOverlay.hide()
            })
            // tabContainer.appendChild('<img class="favicon">')
            tabContainer.appendChild(el)

            // add X
            let span = document.createElement('span')
            span.innerHTML = 'X'
            span.dataset.id = task.tabs[i].id
            span.onclick = function () {
                destroyTab(this.getAttribute('data-id'))
            }
            el.appendChild(span)
            // add X //

        }
    }

    container.appendChild(tabContainer)

    return container
}

var dragula = require('dragula')

var taskOverlay = {

    inputFocus: false,
    isShown: false,

    dragula: dragula({
        direction: 'vertical'
    }),
    show: function () {
        /* disabled in focus mode */
        if (isFocusMode) {
            showFocusModeError()
            return
        }

        // leaveTabEditMode()

        taskOverlay.isShown = true
        taskSwitcherButton.classList.add('active')

        taskOverlay.dragula.containers = []
        empty(taskContainer)

        // show the task elements
        tasks.get().forEach(function (task, index) {
            var el = getTaskElement(task, index)

            taskContainer.appendChild(el)
            taskOverlay.dragula.containers.push(el.getElementsByClassName('task-tabs-container')[0])
        })

        // scroll to the selected element and focus it

        var currentTabElement = document.querySelector('.task-tab-item[data-tab="{id}"]'.replace('{id}', currentTask.tabs.getSelected()))

        if (currentTabElement) {
            currentTabElement.scrollIntoViewIfNeeded()
            currentTabElement.classList.add('fakefocus')
        }

        // un-hide the overlay

        overlay.hidden = false
        taskSwitcherButton.classList.add('active')
        webviews.classList.add('active')

        let titles = document.querySelectorAll('.searchbar-item.task-tab-item')
        for (let i = 0; i < titles.length; i++) {
            titles[i].addEventListener('click', function (event) {
                taskOverlay.inputFocus = true
                sessionRestore.save()
                CT.render()
            })
        }

        CT.events()

    },
    hide: function () {
        if (taskOverlay.isShown) {
            taskOverlay.isShown = false
            overlay.hidden = true

            // if the current task has been deleted, switch to the most recent task
            if (!tasks.get(currentTask.id)) {

                // find the last activity of each remaining task
                var recentTaskList = []

                tasks.get().forEach(function (task) {
                    recentTaskList.push({id: task.id, lastActivity: tasks.getLastActivity(task.id)})
                })

                // sort the tasks based on how recent they are

                recentTaskList.sort(function (a, b) {
                    return b.lastActivity - a.lastActivity
                })

                switchToTask(recentTaskList[0].id)
            }
            taskSwitcherButton.classList.remove('active')
            webviews.classList.remove('active')
        }
    },
    toggle: function () {
        if (taskOverlay.isShown) {
            taskOverlay.hide()
        } else {
            taskOverlay.show()
        }
    }
}

// swipe down on the tabstrip to show the task overlay
// this was the old expanded mode gesture, so it's remapped to the overlay
tabContainer.addEventListener('mousewheel', function (e) {
    if (e.deltaY < -30 && e.deltaX < 10) {
        taskOverlay.show()
        e.stopImmediatePropagation()
    }
})
// tabContainer.addEventListener('click', function (e) {
//   alert()
// })
function getTaskContainer(id) {
    return document.querySelector('.task-container[data-task="{id}"]'.replace('{id}', id))
}

function syncStateAndOverlay() {

    // get a list of all of the currently open tabs and tasks

    var tabSet = {}
    var taskSet = {}

    tasks.get().forEach(function (task) {
        taskSet[task.id] = task
        task.tabs.get().forEach(function (tab) {
            tabSet[tab.id] = tab
        })
    })

    var selectedTask = currentTask.id

    // destroy the old tasks
    tasks.destroyAll()

    // add the new tasks, in the order that they are listed in the overlay

    var taskElements = taskContainer.getElementsByClassName('task-container')

    for (var i = 0; i < taskElements.length; i++) {
        tasks.add(taskSet[taskElements[i].getAttribute('data-task')])
    }

    tasks.setSelected(selectedTask)

    // loop through each task

    tasks.get().forEach(function (task) {
        var container = getTaskContainer(task.id)

        // if the task still exists, update the tabs
        if (container) {
            // remove all of the old tabs
            task.tabs.destroyAll()

            // add the new tabs
            var newTabs = container.getElementsByClassName('task-tab-item')

            if (newTabs.length !== 0) {
                for (var i = 0; i < newTabs.length; i++) {
                    task.tabs.add(tabSet[newTabs[i].getAttribute('data-tab')])
                    // update the data-task attribute of the tab element
                    newTabs[i].setAttribute('data-task', task.id)
                }
            } else {
                // the task has no tabs, remove it

                destroyTask(task.id)
                container.remove()
            }
        } else {
            // the task no longer exists, remove it

            destroyTask(task.id)
        }
    })
}

taskOverlay.dragula.on('drop', function () {
    syncStateAndOverlay()
})

eventEmitter.on('updateFavicon', () => {
    if (document.querySelector('#switch-task-button').classList.contains('active')) {
        taskOverlay.show()
    }
})


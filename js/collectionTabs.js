CT = {

    taskId: '',
    taskIndex: '',
    tabId: '',
    tab: '',
    tabActive: '',
    prevTabIndex: [],
    inputFocus: false,

    start() {
        say.m('CT.start()')

        CT.prevTabIndex = []

        CT.selectFirstTabOnStart()

        CT.taskId = tabState.selectedTask
        CT.add5()
        CT.loadTasks()
        CT.render()
        CT.events()
    },
    events() {
        say.m('CT.events()')

        document.getElementById('collection-tabs').addEventListener('click', function (e) {
            CT.goToCollection(e)
        })


        document.querySelector('.page-tabs').addEventListener('click', function (e) {
            CT.remoteClassEditing()
        })


        let taskName = document.querySelectorAll('.task-action-container .task-name')
        for (var i = 0; i < taskName.length; i++) {
            taskName[i].addEventListener('click', function (event) {
                CT.overviewTaskNameClickE(event)
            })
            taskName[i].addEventListener('keydown', function (e) {
                CT.overviewTaskNameClickEnterE(e)
            })
        }

    },

    goToCollection(e) {
        say.m('CT.goToCollection(e):')

        // click on collection tabs
        try {
            if (e.target.parentNode.parentNode.id == 'collection-tabs') {
                if (e.target.parentNode.className.indexOf("active-tab") == -1) {
                    tabState.selectedTask = e.target.parentNode.dataset.taskId.trim()
                    switchToTask(e.target.parentNode.dataset.taskId.trim())
                    sessionRestore.save()
                    CT.render()
                    for (let i = 0; i < tabState.tasks.length; i++) {
                        if (tabState.tasks[i].id == tabState.selectedTask) {
                            if (tabState.tasks[i].name == null) {
                                document.querySelector('.active-tab input').disabled = false
                                // document.querySelector('.active-tab input').focus()
                                document.querySelector('.active-tab input').select()
                                document.querySelector('.active-tab').className += ' editing'
                                // CT.inputFocus = true
                                document.querySelector('.active-tab').addEventListener('blur', function () {
                                    CT.remoteClassEditing()
                                }, true);
                            }
                        }
                    }
                } else {
                    document.querySelector('.active-tab input').disabled = false
                    // document.querySelector('.active-tab input').focus()
                    document.querySelector('.active-tab input').select()
                    document.querySelector('.active-tab').className += ' editing'
                    // CT.inputFocus = true
                    document.querySelector('.active-tab').addEventListener('blur', function () {
                        CT.remoteClassEditing()
                    }, true);
                }
            }

        } catch (e) {
        }

        // edit name collection tabs
        document.querySelector('.active-tab input').addEventListener('keydown', function (e) {
            if (e.which == 13) {
                for (let i = 0; i < tabState.tasks.length; i++) {
                    if (tabState.tasks[i].id == e.target.getAttribute('data-id')) {
                        tabState.tasks[i].name = e.target.value
                    }
                }
                sessionRestore.save()
                CT.render()
            }
        })

        eventEmitter.emit('goToCollection')
    },
    goToCollectionID(id) {
        say.m('CT.goToCollectionID(id): ' + id)

        let index = CT.getIndexFromIdTaskId(id)
        if (index == 0) {
            switchToTask(tabState.tasks[index].id)
        } else {
            switchToTask(tabState.tasks[index - 1].id)
        }

        CT.render()
    },
    getIndexFromIdTaskId(id) {
        say.m('CT.getIndexFromIdTaskId(id): ' + id)

        let index = ''

        for (let i = 0; i < tabState.tasks.length; i++) {
            console.log(tabState.tasks[i].id)
            if (tabState.tasks[i].id == id) {
                index = i
            }
        }

        console.log('id: ' + id, 'index: ' + index)
        return index
    },
    remoteClassEditing() {
        say.m('CT.remoteClassEditing()')

        if (document.querySelector('.active-tab ').className.indexOf("editing") != -1) {
            document.querySelector('.active-tab ').classList.remove("editing");
            CT.remoteClassEditing()
        }
    },
    getDataFromE(e) {
        say.m('CT.getDataFromE(e)' + e)

        if (e.target.type == 'text') {
            CT.taskId = e.target.parentElement.dataset.taskId
            CT.taskIndex = e.target.parentElement.dataset.index
        } else {
            CT.taskId = e.target.dataset.taskId
            CT.taskIndex = e.target.dataset.index
        }

        CT.tabId = tabState.tasks[CT.taskIndex].tabs[0].id

        CT.tab = document.querySelector('[data-tab="' + CT.taskIndex + '"]')
        CT.tabActive = document.querySelector('.active-tab.collection-tab')

        CT.prevTabIndex.push(CT.taskIndex) // history tabs

        tabState.selectedTask = tabState.tasks[CT.prevTabIndex[CT.prevTabIndex.length - 1]].id

    },
    selectFirstTabOnStart() {
        tabState.selectedTask = tabState.tasks[0].id
        switchToTask(tabState.selectedTask)
        sessionRestore.save()
    },
    loadTasks() {
        tasks.get().forEach(function (task, index) {
            var el = getTaskElement(task, index)
            taskContainer.appendChild(el)
            taskOverlay.dragula.containers.push(el.getElementsByClassName('task-tabs-container')[0])
        })
    },
    clickOnFirstCollection() {
        document.querySelector('[data-task-id="' + tasks.get()[0].id + ' "]').click()
    },
    add5() {
        if (tabState.tasks.length < 5) {
            let id = tabState.selectedTask
            for (let i = tabState.tasks.length; i != 5; i++) {
                tasks.add()
            }
        }
    },
    overviewTaskNameClickEnterE(e) {
        say.m('CT.overviewTaskNameClickEnterE()')

        let id = e.target.parentElement.parentElement.getAttribute('data-task')
        let eTarget = e.target
        let eVal = e.target.value
        if (e.which == 13) {
            CT.render()
            for (let i = 0; i < tasks.get().length; i++) {
                if (tasks.get()[i].id == id) {
                    if (i <= 5) {
                        document.querySelector(`[data-index="${i}"]`).click()
                    }
                }
            }
        }
    },
    overviewTaskNameClickE(e) {
        say.m('CT.overviewTaskNameClickE()')

        let id = e.target.parentElement.parentElement.getAttribute('data-task')
        for (let i = 0; i < tasks.get().length; i++) {
            if (tasks.get()[i].id == id) {
                if (i <= 5) {
                    CT.collectionTopClickOnCollectionTab(i)
                    CT.collectionLeftFocusOnCollectionTabInput(id)
                }
            }
        }
    },

    collectionTopClickOnCollectionTab(index) {
        document.querySelector(`[data-index="${index}"]`).click()
    },
    collectionTopRemoveBGSelectedAll() {
        let elems = document.querySelectorAll(".active-tab");
        for (var i = 0; i < elems.length; i++)
            elems[i].classList.remove('active-tab');
    },
    collectionTopAddBGSelected(index) {
        CT.collectionTopRemoveBGSelectedAll()
        document.querySelector(`[data-index="${index}"]`).classList.add('active-tab')
    },
    collectionTopAddBGSelectedById(id_) {
        CT.collectionTopRemoveBGSelectedAll()
        document.querySelector(`[data-task-id="${id_} "]`).classList.add('active-tab')
    },
    collectionLeftFocusOnCollectionTabInput(id) {
        document.querySelector(`[data-task="${id}"] input`).focus()
    },

    render() {
        say.m('CT.render()')

        if (CT.inputFocus == false) {
            let collectionTabsHTML = []
            for (let i = 0; i < tabState.tasks.length; i++) {
                let val = tabState.tasks[i].name
                if (val == null || val == 'null')
                    val = ''
                let title = `<input placeholder="&#9679;&#9679;&#9679;" type="text" class="collectionTabInput" data-id="${tabState.tasks[i].id}" value="${val}" disabled="true">` || `<input type="text" placeholder="&#9679;&#9679;&#9679;" class="collectionTabInput" data-id="${tabState.tasks[i].id}" value="${val}"  disabled="true"> <svg width="23.9px" height="5.6px">23.9 5.6 <use xlink:href="icons/svg/miniature-controls.svg#ellipsis-big"></use></svg>`

                collectionTabsHTML.push('<div class="collection-tab ' + ( tabState.selectedTask == tabState.tasks[i].id ? 'active-tab' : '' ) + '" data-task-id="' + tabState.tasks[i].id + ' " data-index="' + i + '">' + title + '</div>')
                // collectionTabsHTML.push('<div class="collection-tab ' + ( tabState.selectedTask == tabState.tasks[i].id ? 'active-tab' : '' ) + '" data-task-id="' + tabState.tasks[i].id + ' " data-index="' + i + '">' + title + '</div>')
            }
            document.getElementById('collection-tabs').innerHTML = collectionTabsHTML.join('')

            CT.renderOverlay()

            eventEmitter.emit('render')

        }
    },
    renderOverlay() {
        say.m('CT.renderOverlay()')

        eventEmitter.emit('renderOverlay')

        if (taskOverlay.inputFocus) {
            if (document.querySelector('#task-overlay').getAttribute('hidden') == null)
                taskOverlay.show()
        }

        eventEmitter.emit('render')

    }

}
CT.start()






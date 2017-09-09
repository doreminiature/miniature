// MODALS
// is a modal window that covers the webview and provides additional information or choices at the time of creation or
// editing
// =====================================================================================================================

const os = require('os');
const setting = require('electron-json-storage');
setting.setDataPath(os.tmpdir());

modals = {

    el: '',
    showCheckedOnStart: '',

    start() {
        modals.el = document.querySelector('#modals')
        modals.event()
        modals.db()

    }, event() {
        document.onkeydown = function (evt) {
            cancelKeypress = (evt.keyCode == 112);
            if (cancelKeypress) {
                modals.show('help')
            }
        }
    },

    show(page) {
        say.m('modals.show(page):')

        function createListItem(host, title) {
            let a = document.createElement("a")
            a.href = '#'
            a.classList.add('openTabsNOW')
            a.setAttribute("data-links", host)
            a.innerText = title
            modals.el.appendChild(a)
        }

        modals.el.style.display = 'block'
        modals.el.innerHTML = ''
        modals.el.className += " showModals"
        if (page == 'collection') {
            let h1 = document.createElement("h1")
            h1.innerText = 'This is collection modal!'
            modals.el.appendChild(h1)

            let a = document.createElement("a")
            a.href = '#'
            a.classList.add('openCollectionNOW')

            a.setAttribute("data-links", "www.google.com.ua:Google,www.w3schools.com:w3schools")
            a.innerText = 'aaa'
            modals.el.appendChild(a)
        } else if (page == 'navBar') {
            let h1 = document.createElement("h1");
            h1.innerText = 'This is navBar modal!'
            modals.el.appendChild(h1);

            /* Edit list of suggested sites here */
            createListItem('youtube.com', 'Youtube')
            createListItem('www.wikipedia.org', 'Wikipedia')
        } else if (page == 'help') {
            let h1 = document.createElement("h1");
            h1.innerText = 'This is help modal!'
            modals.el.appendChild(h1);

            let h4 = document.createElement("h4");
            h4.innerText = 'Show modal on start?'
            modals.el.appendChild(h4);

            let checkbox = document.createElement('input');
            checkbox.type = "checkbox";

            if (modals.showCheckedOnStart == true)
                checkbox.checked = true
            else
                checkbox.checked = false
            checkbox.onclick = function (event) {

                let CB = event.target;
                if (CB.checked) {
                    modals.showCheckedOnStart = true
                    modals._showModalToDB(true)
                } else {
                    modals.showCheckedOnStart = false
                    modals._showModalToDB(false)
                }

            }
            modals.el.appendChild(checkbox);
        }
    },
    hide() {
        say.m('modals.hide()')

        modals.el.style.display = 'none'
    },
    db() {
        say.m('modals.db()')

        setting.get('showModalHelpInStart', function (error, data) {

            if (data == undefined) {
                setting.set('showModalHelpInStart', true, function (error) {
                    if (error) throw error;
                });
            } else if (data == true) {
                modals.showCheckedOnStart = true
                modals.show('help')
            } else if (data == false) {
                modals.showCheckedOnStart = false
            }
        });
    }, _showModalToDB(state) {
        setting.set('showModalHelpInStart', state, function (error) {
            if (error) throw error;
        });
    }

}
modals.start()

// MODALS
// is a modal window that covers the webview and provides additional information or choices at the time of creation or
// editing
// =====================================================================================================================

modals = {

    el: '',

    start() {
        modals.el = document.querySelector('#modals')

    }, event() {

    },

    show(page) {
        say.m('modals.show(page):')

        modals.el.style.display = 'block'
        modals.el.innerHTML = ''
        modals.el.className += " showModals"
        if (page == 'collection') {
            let h1 = document.createElement("h1");
            h1.innerText = 'This is collection modal!'
            modals.el.appendChild(h1);
        } else if (page == 'navBar') {
            let h1 = document.createElement("h1");
            h1.innerText = 'This is navBar modal!'
            modals.el.appendChild(h1);
        }
    },

    hide() {
        say.m('modals.hide()')

        modals.el.style.display = 'none'
    }

}
modals.start()

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

        function createCollectionItem(hosts, title, description) {
            let a = document.createElement("a")
            a.href = '#'
            // a.setAttribute('aria-label', description)
            // a.classList.add('hint--top')
            // a.classList.add('hint--large')
            // a.classList.add('hint--info')
            // a.classList.add('hint--no-animate')
            a.classList.add('openCollectionNOW')
            a.setAttribute("data-links", hosts)
            a.innerText = title
            modals.el.appendChild(a)
        }

        function createHeader(title) {
            let h = document.createElement("h1");
            h.innerText = title
            modals.el.appendChild(h);
        }

        modals.el.style.display = 'flex'
        modals.el.innerHTML = ''
        modals.el.className += ""

        // addTaskButton.addEventListener('click', function (e) {
        //     switchToTask(tasks.add())
        //     CT.render()
        //     // switchToTask(tasks.addInStart())
        //     modals.hide();
        // })

        // close modal cross
        let closeModal = document.createElement("i");
        closeModal.className = 'close-modal fa fa-close';
        closeModal.addEventListener('click', () => {
            modals.hide();
            // alert()
            // leaveTabEditMode(); // if a tab is in edit-mode, we want to exit it
            modals.show('navBar')
        })

        if (page == 'collection') {
            modals.el.classList.remove('navBarModal');
            modals.el.classList.remove('helpModal');
            modals.el.className = 'collectionModal';
            modals.el.appendChild(closeModal);

            // let addTaskButton = document.createElement("a")
            // modals.el.appendChild(addTaskButton)
            // addTaskButton.href = '#'
            // addTaskButton.innerText = 'Create new collection'
            // addTaskButton.addEventListener('click', function (e) {
            //     CT.render()
            //     // switchToTask(tasks.addInStart())
            //     modals.hide();
            // })


            createHeader('Culture and art')

            createCollectionItem(
                'en.wikipedia.org/wiki/Culture',
                'Culture',
                'Culture (/ˈkʌltʃər/) is the social behavior and norms found in human societies. Culture is a central concept in anthropology, encompassing the range of phenomena that are transmitted through social learning in human societies.')
            createCollectionItem('en.wikipedia.org/wiki/Humanities', 'Humanities')
            createCollectionItem('en.wikipedia.org/wiki/Art', 'Art')
            createCollectionItem('en.wikipedia.org/wiki/Literature', 'Literature')
            createCollectionItem('en.wikipedia.org/wiki/Poetry', 'Poetry')
            createCollectionItem('en.wikipedia.org/wiki/Performing_arts', 'Performing arts')
            createCollectionItem('en.wikipedia.org/wiki/Comedy', 'Comedy')
            createCollectionItem('en.wikipedia.org/wiki/Dance', 'Dance')
            createCollectionItem('en.wikipedia.org/wiki/Fild', 'Film')
            createCollectionItem('en.wikipedia.org/wiki/Music', 'Music')
            createCollectionItem('en.wikipeda.org/wiki/Opera', 'Opera')
            createCollectionItem('en.wikipedia.org/wiki/Theatre', 'Theatre')
            createCollectionItem('en.wikipedia.org/wiki/Circus', 'Circus')
            createCollectionItem('en.wikipedia.org/wiki/Visual_arts', 'Visual arts')
            createCollectionItem('en.wikipedia.org/wiki/Animation', 'Animation')
            createCollectionItem('en.wikiedia.org/wiki/Architecture', 'Architecture')
            createCollectionItem('en.wikipedia.org/wiki/Comics', 'Comics')
            createCollectionItem('en.wikipedia.org/wiki/Design', 'Design')
            createCollectionItem('en.wikipedia.org/wiki/Drawing', 'Drawing')
            createCollectionItem('en.wikipedia.org/wiki/Painting', 'Painting')
            createCollectionItem('en.wikipedia.org/wiki/Photography', 'Photography')
            createCollectionItem('en.wikipedia.org/wiki/Sculpture', 'Sculpture')
            createCollectionItem('en.wikipedia.org/wiki/Textile_arts', 'Textile arts')
            createCollectionItem('en.wikipedia.org/wiki/Fashion', 'Fashion')
            createCollectionItem('en.wikipedia.org/wiki/Color', 'Color')

            createHeader('Entertainment and Recreation')
            createCollectionItem('en.wikipedia.org/wiki/Cooking', 'Cooking')
            createCollectionItem('en.wikipedia.org/wiki/Board_game', 'Board games')
            createCollectionItem('en.wikipedia.org/wiki/Card_game', 'Card games')
            createCollectionItem('en.wikipedia.org/wiki/Video_game', 'Video games')
            createCollectionItem('en.wikipedia.org/wiki/Role-playing_game', 'Role-playing games')
            createCollectionItem('en.wikipedia.org/wiki/Association_football', 'Football')
            createCollectionItem('en.wikipedia.org/wiki/American_football', 'American football')
            createCollectionItem('en.wikipedia.org/wiki/Baseball', 'Baseball')
            createCollectionItem('en.wikipedia.org/wiki/Basketball', 'Basketball')
            createCollectionItem('en.wikipediaorg/wiki/Cricket', 'Cricket')
            createCollectionItem('en.wikipedia.org/wiki/Gold', 'Golf')
            createCollectionItem('en.wikipedia.org/wiki/Ice_hockey', 'Ice hockey')
            createCollectionItem('en.wikipedia.org/wiki/Olympics', 'Olympics')
            createCollectionItem('en.wikipedia.org/wiki/Cycling', 'Cycling')
            createCollectionItem('en.wikipedia.org/wiki/Motor_racing', 'Motor Racing')
            createCollectionItem('en.wikipedia.org/wiki/Rugby', 'Rugby')
            createCollectionItem('en.wikipedia.org/wiki/Swimming', 'Swimming')
            createCollectionItem('en.wikipedia.org/wiki/Tennis', 'Tennis')

            createHeader('Geography and places')

            createCollectionItem('en.wikipedia.org/wiki/Earth', 'Earth')
            createCollectionItem('en.wikipedia.org/wiki/Africa', 'Africa')
            createCollectionItem('en.wikipedia.org/wiki/Asia', 'Asia')
            createCollectionItem('en.wikipedia.org/wiki/Europe', 'Europe')
            createCollectionItem('en.wikipedia.org/wiki/North_America', 'North America')
            createCollectionItem('en.wikipedia.org/wiki/Oceania', 'Oceania')
            createCollectionItem('en.wikipedia.org/wiki/South_America', 'South America')
            createCollectionItem('en.wikipedia.org/wiki/Antarctica', 'Antarctic')
            createCollectionItem('en.wikipedia.org/wiki/Arctic', 'Arctic')

            createHeader('Health and fitness')

            createCollectionItem('en.wikipedia.org/wiki/Health', 'Health')
            createCollectionItem('en.wikipedia.org/wiki/Self-care', 'Self-care')
            createCollectionItem('en.wikipedia.org/wiki/Nutrition', 'Nutrition')
            createCollectionItem('en.wikipedia.org/wiki/Physical_excersize', 'Physical excersize')
            createCollectionItem('en.wikipedia.org/wiki/Hygiene', 'Hygiene')
            createCollectionItem('en.wikipedia.org/wiki/Health_science', 'Health science')
            createCollectionItem('en.wikipedia.org/wiki/Medicine', 'Medicine')

            createHeader('History')

            createCollectionItem('en.wikipedia.org/wiki/History', 'History')
            createCollectionItem('en.wikipedia.org/wiki/History_of_the_world', 'History of the world')
            createCollectionItem('en.wikipedia.org/wiki/History_of_the_earth', 'History of the earth')

            createCollectionItem('en.wikipedia.org/wiki/Prehistory', 'Prehistory')
            createCollectionItem('en.wikipedia.org/wiki/Protohistory', 'Protohistory')
            createCollectionItem('en.wikipedia.org/wiki/Ancient_history', 'Ancient_history')
            createCollectionItem('en.wikipedia.org/wiki/Modern_history', 'Modern_history')
            createCollectionItem('en.wikipedia.org/wiki/Future_history', 'Future history')





/*
            The Ages of history – Stone Age • Copper Age • Bronze Age • Iron Age • Dark Ages (historiography) • Middle Ages • Age of Discovery • Renaissance • Age of Enlightenment • Industrial Age • Space Age • Information Age


            History of science – Theories/sociology • Historiography • Mathematics • Pseudoscience • Scientific method

            History of the natural sciences – Astronomy • Biology • Chemistry • Ecology • Geography • Physics • Geology

            History of the social sciences – Anthropology • Economics • Education • Geography • Linguistics • Political science • Psychology • Sociology

            History of science by era – In early cultures • In Classical Antiquity • In the Middle Ages • In the Renaissance • Scientific Revolution

            History of technology – Agriculture & agricultural science • Architecture • Biotechnology • Chemical engineering • Communication • Computing (Computer science, Software engineering) • Electrical engineering • Invention • Materials science • Measurement • Medicine • Military technology • Transport


            Cultural history – Money • Sport

            History of art – Dance • Film • Music • Painting • Theatre



            History by region – Ancient Egypt • Ancient Greece • Ancient Rome • History of China • History of the Middle East • History of Mesoamerica • History of India
*/
            createHeader('Mathematics and logic')

            createHeader('Natural and physical sciences')

            createHeader('People and self')

            createHeader('Religion and belief systems')

            createHeader('Philosophy and thinking')

            createHeader('Society and social sciences')

            createHeader('Technology and applied sciences')


        } else if (page == 'navBar') {

            modals.el.appendChild(closeModal);
            modals.el.classList.remove('collectionModal');
            modals.el.classList.remove('helpModal');
            modals.el.className = 'navBarModal';

            /* Edit list of suggested sites here */
            createListItem('www.wikipedia.org', 'Wikipedia')
            createListItem('www.youtube.com', 'Youtube')

        } else if (page == 'help') {
            modals.el.classList.remove('navBarModal');
            modals.el.classList.remove('collectionModal');
            modals.el.className = 'helpModal';


            let showOnStartLabel = document.createElement("label")
            showOnStartLabel.id = "showOnStartLabel"
            showOnStartLabel.setAttribute("for", "showOnStartCheckbox")
            showOnStartLabel.className = "showOnStart"
            showOnStartLabel.innerText = 'Show this help'

            let showOnStartCheckbox = document.createElement('input')
            showOnStartCheckbox.type = "checkbox"
            showOnStartCheckbox.id = "showOnStartCheckbox"

            let h1Heading =  document.createElement('h1');
            h1Heading.id = 'helpHeading'
            h1Heading.innerText = 'Greetings. This is about & help page. This page appears on first browser start and will hold introduction and help tips.'

            modals.el.appendChild(closeModal)
            modals.el.appendChild(h1Heading)
            modals.el.appendChild(showOnStartCheckbox)
            modals.el.appendChild(showOnStartLabel)

            if (modals.showCheckedOnStart == true)
                showOnStartCheckbox.checked = true
            else
                showOnStartCheckbox.checked = false

            showOnStartCheckbox.onclick = function (event) {

                let CB = event.target;
                if (CB.checked) {
                    modals.showCheckedOnStart = true
                    modals._showModalToDB(true)
                } else {
                    modals.showCheckedOnStart = false
                    modals._showModalToDB(false)
                }

            }

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
                modals.showCheckedOnStart = true
                modals.show('help')
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

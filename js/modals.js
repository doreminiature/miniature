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

        function createListItem(host, title, description) {
            let a = document.createElement("a")
            a.href = '#'
            a.classList.add('openTabsNOW')
            // a.classList.add('hint--top')
            // a.classList.add('hint--large')
            // a.classList.add('hint--info')
            // a.classList.add('hint--no-animate')
            // a.setAttribute('aria-label', description)
            a.setAttribute('data-links', host)
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

        function createHeader(title, id) {
            let h = document.createElement("h1")
            h.innerText = title
            modals.el.appendChild(h)
        }

        function subheader(title) {
            let subhead = document.createElement("p")
            subhead.style.fontWeight = "bold"
            subhead.style.width = "100%"
            subhead.style.margin = "30px 0 10px 0"
            subhead.innerText = title
            modals.el.appendChild(subhead)
        }

        function addElement(name, content, cssClass) {
            let el = document.createElement(name)
            el.innerText = content
            el.className = cssClass
            modals.el.appendChild(el)
        }

        function addGif(source) {
            let gif = document.createElement("img")
            gif.setAttribute("src", source)
            modals.el.appendChild(gif)
        }

        function createLink(href) {
            let link = document.createElement("a")
            link.href = href
            modals.el.appendChild(link)
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
            modals.hide()
            modals.showCheckedOnStart = false
            modals._showModalToDB(false)
            if(tabs.get(tabs.getSelected()).secure == true) {
                modals.hide()
            } else if(tabs.getSelected() != '' && tabs.getSelected() != undefined) {
                enterEditMode(tabs.getSelected())
            }
            leaveTabEditMode()
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

            // createHeader('Unsolved problems')
            //
            //
            // createCollectionItem('wikipedia.org/wiki/Unsolved_problems_in_mathematics', 'Problems in mathematics')
            // createCollectionItem('wikipedia.org/wiki/Unsolved_problems_in_physics', 'Problems in physics')
            // createCollectionItem('wikipedia.org/wiki/Unsolved_problems_in_philosophy', 'Problems in philosophy')
            // createCollectionItem('wikipedia.org/wiki/Unsolved_problems_in_economics', 'Problems in economics')
            // createCollectionItem('wikipedia.org/wiki/Unsolved_problems_in_linguistics', 'Problems in linguistics')
            // createCollectionItem('wikipedia.org/wiki/Unsolved_problems_in_neuroscience', 'Problems in neuroscience')
            // createCollectionItem('wikipedia.org/wiki/List_of_open_problems_in_computer_science', 'Problems in computer science')

            createHeader('Culture and art', 'Culture&Art')

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

            createHeader('Entertainment and Recreation', 'Entertainment&Recreation')
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
            createCollectionItem('en.wikipedia.org/wiki/Ancient_history', 'Ancient history')
            createCollectionItem('en.wikipedia.org/wiki/Modern_history', 'Modern history')
            createCollectionItem('en.wikipedia.org/wiki/Future_history', 'Future history')
            createCollectionItem('en.wikipedia.org/wiki/Stone_Age', 'Stone Age')
            createCollectionItem('en.wikipedia.org/wiki/Copper_Age', 'Copper Age')

            createCollectionItem('wikipedia.org/wiki/Copper_Age', 'Copper Age')
            createCollectionItem('wikipedia.org/wiki/Bronze_Age', 'Bronze Age')
            createCollectionItem('wikipedia.org/wiki/Iron_Age', 'Iron Age')

            createCollectionItem('wikipedia.org/wiki/Dark_Ages_(historiography)', 'Dark Ages (historiography)')

            createCollectionItem('wikipedia.org/wiki/Middle_Ages', 'Middle Ages')

            createCollectionItem('wikipedia.org/wiki/Age_of_Discovery', 'Age of Discovery')

            createCollectionItem('wikipedia.org/wiki/Renaissance', 'Renaissance')

            createCollectionItem('wikipedia.org/wiki/Age_of_Enlightenment', 'Age of Enlightenment')

            createCollectionItem('wikipedia.org/wiki/Industrial_Revolution', 'Industrial Age')

            createCollectionItem('wikipedia.org/wiki/Space_Age', 'Space Age')

            createCollectionItem('wikipedia.org/wiki/Information_Age', 'Information Age')


            createHeader('Mathematics and logic')


            createCollectionItem('wikipedia.org/wiki/Formal_science', 'Formal sciences')

            createCollectionItem('wikipedia.org/wiki/Information_theory', 'Information theory')

            createCollectionItem('wikipedia.org/wiki/Logic', 'Logic')

            createCollectionItem('wikipedia.org/wiki/Statistics', 'Statistics')

            createCollectionItem('wikipedia.org/wiki/Theoretical_computer_science', 'Theoretical computer science')

            createCollectionItem('wikipedia.org/wiki/Mathematics', 'Mathematics')

            createCollectionItem('wikipedia.org/wiki/Algebra', 'Algebra')

            createCollectionItem('wikipedia.org/wiki/Applied_mathematics', 'Applied mathematics')

            createCollectionItem('wikipedia.org/wiki/Arithmetic', 'Arithmetic')

            createCollectionItem('wikipedia.org/wiki/Calculus', 'Calculus')

            createCollectionItem('wikipedia.org/wiki/Equation', 'Equations')

            createCollectionItem('wikipedia.org/wiki/Geometry', 'Geometry')

            createCollectionItem('wikipedia.org/wiki/Mathematical_analysis', 'Mathematical analysis')

            createCollectionItem('wikipedia.org/wiki/Probability', 'Probability')

            createCollectionItem('wikipedia.org/wiki/Mathematical_proof', 'Proofs')

            createCollectionItem('wikipedia.org/wiki/Theorem', 'Theorems')

            createCollectionItem('wikipedia.org/wiki/Trigonometry', 'Trigonometry')


            createHeader('Natural and physical sciences')


            createCollectionItem('wikipedia.org/wiki/Natural_science', 'Natural science')

            createCollectionItem('wikipedia.org/wiki/Nature', 'Nature')

            createCollectionItem('wikipedia.org/wiki/Science', 'Science')

            createCollectionItem('wikipedia.org/wiki/Scientific_method', 'Scientific method')

            createCollectionItem('wikipedia.org/wiki/Scientific_misconduct', 'Scientific misconduct')

            createCollectionItem('wikipedia.org/wiki/Fields_of_science', 'Fields of science')

            createCollectionItem('wikipedia.org/wiki/Biology', 'Biology')

            createCollectionItem('wikipedia.org/wiki/Anatomy', 'Anatomy')

            createCollectionItem('wikipedia.org/wiki/Human_anatomy', 'Human anatomy')

            createCollectionItem('wikipedia.org/wiki/Astrobiology', 'Astrobiology')

            createCollectionItem('wikipedia.org/wiki/Biochemistry', 'Biochemistry')

            createCollectionItem('wikipedia.org/wiki/Bioinformatics', 'Bioinformatics')

            createCollectionItem('wikipedia.org/wiki/Biological_anthropology', 'Biological anthropology')

            createCollectionItem('wikipedia.org/wiki/Biophysics', 'Biophysics')

            createCollectionItem('wikipedia.org/wiki/Botany', 'Botany')

            createCollectionItem('wikipedia.org/wiki/Cell_biology', 'Cell biology')

            createCollectionItem('wikipedia.org/wiki/Computational_biology', 'Computational biology')

            createCollectionItem('wikipedia.org/wiki/Developmental_biology', 'Developmental biology')

            createCollectionItem('wikipedia.org/wiki/Ecology', 'Ecology')

            createCollectionItem('wikipedia.org/wiki/Evolutionary_biology', 'Evolutionary biology')

            createCollectionItem('wikipedia.org/wiki/Genetics', 'Genetics')

            createCollectionItem('wikipedia.org/wiki/Molecular_genetics', 'Molecular genetics')

            createCollectionItem('wikipedia.org/wiki/Population_genetics', 'Population genetics')

            createCollectionItem('wikipedia.org/wiki/Genomics', 'Genomics')

            createCollectionItem('wikipedia.org/wiki/Histology', 'Histology')

            createCollectionItem('wikipedia.org/wiki/Human_biology', 'Human biology')

            createCollectionItem('wikipedia.org/wiki/Immunology', 'Immunology')

            createCollectionItem('wikipedia.org/wiki/Microbiology', 'Microbiology')

            createCollectionItem('wikipedia.org/wiki/Molecular_biology', 'Molecular biology')

            createCollectionItem('wikipedia.org/wiki/Neuroscience', 'Neuroscience')

            createCollectionItem('wikipedia.org/wiki/Origin_of_life', 'Origin of life')

            createCollectionItem('wikipedia.org/wiki/Paleontology', 'Paleontology')

            createCollectionItem('wikipedia.org/wiki/Physiology', 'Physiology')

            createCollectionItem('wikipedia.org/wiki/Alpha_taxonomy', 'Taxonomy')

            createCollectionItem('wikipedia.org/wiki/Zoology', 'Zoology')

            createCollectionItem('wikipedia.org/wiki/Ethology', 'Ethology')

            createCollectionItem('wikipedia.org/wiki/Astronomy', 'Astronomy')

            createCollectionItem('wikipedia.org/wiki/Chemistry', 'Chemistry')

            createCollectionItem('wikipedia.org/wiki/Earth_science', 'Earth science')

            createCollectionItem('wikipedia.org/wiki/Physics', 'Physics')

            createCollectionItem('wikipedia.org/wiki/Systems_theory', 'Systems theory')


            createHeader('People and self')


            createCollectionItem('wikipedia.org/wiki/Person', 'Person')

            createCollectionItem('wikipedia.org/wiki/Biography', 'Biography')

            createCollectionItem('wikipedia.org/wiki/Character_orientation', 'Character orientation')

            createCollectionItem('wikipedia.org/wiki/Consciousness', 'Consciousness')

            createCollectionItem('wikipedia.org/wiki/Gender', 'Gender')

            createCollectionItem('wikipedia.org/wiki/Health', 'Health')

            createCollectionItem('wikipedia.org/wiki/Human', 'Human')

            createCollectionItem('wikipedia.org/wiki/Human_body', 'Human body')

            createCollectionItem('wikipedia.org/wiki/Identity_(social_science)', 'Identity')

            createCollectionItem('wikipedia.org/wiki/Individual', 'Individual')

            createCollectionItem('wikipedia.org/wiki/Intelligence', 'Intelligence')

            createCollectionItem('wikipedia.org/wiki/Moral_character', 'Moral character')

            createCollectionItem('wikipedia.org/wiki/Personal_identity_(philosophy)', 'Personal identity')

            createCollectionItem('wikipedia.org/wiki/Personality_type', 'Personality')

            createCollectionItem('wikipedia.org/wiki/Physical_fitness', 'Physical fitness')

            createCollectionItem('wikipedia.org/wiki/Spirituality', 'Spirituality')

            createCollectionItem('wikipedia.org/wiki/Value_(personal_and_cultural)', 'Values')

            createCollectionItem('wikipedia.org/wiki/Virtue#Virtues_and_values', 'Virtues')

            createCollectionItem('wikipedia.org/wiki/Outline_of_self', 'Self')

            createCollectionItem('wikipedia.org/wiki/Personal_life', 'Personal life')

            createCollectionItem('wikipedia.org/wiki/Adventure', 'Adventure')

            createCollectionItem('wikipedia.org/wiki/Career', 'Career')

            createCollectionItem('wikipedia.org/wiki/Citizenship', 'Citizenship')

            createCollectionItem('wikipedia.org/wiki/Education', 'Education')

            createCollectionItem('wikipedia.org/wiki/Employment', 'Employment')

            createCollectionItem('wikipedia.org/wiki/Everyday_life', 'Everyday life')

            createCollectionItem('wikipedia.org/wiki/Experience', 'Experience')

            createCollectionItem('wikipedia.org/wiki/Family', 'Family')

            createCollectionItem('wikipedia.org/wiki/Friendship', 'Friendship')

            createCollectionItem('wikipedia.org/wiki/Goal', 'Goal')

            createCollectionItem('wikipedia.org/wiki/Health_maintenance', 'Health maintenance')

            createCollectionItem('wikipedia.org/wiki/Home', 'Home')

            createCollectionItem('wikipedia.org/wiki/Homemaking', 'Homemaking')

            createCollectionItem('wikipedia.org/wiki/Human_condition', 'Human condition')

            createCollectionItem('wikipedia.org/wiki/Human_ecology', 'Human ecology')

            createCollectionItem('wikipedia.org/wiki/Interpersonal_relationship', 'Interpersonal relationship')

            createCollectionItem('wikipedia.org/wiki/Life_(disambiguation)', 'Life')

            createCollectionItem('wikipedia.org/wiki/Lifestyle_(sociology)', 'Lifestyle')

            createCollectionItem('wikipedia.org/wiki/Meaning_of_life', 'Meaning of life')

            createCollectionItem('wikipedia.org/wiki/Pet', 'Pets')

            createCollectionItem('wikipedia.org/wiki/Profession', 'Profession')

            createCollectionItem('wikipedia.org/wiki/Travel', 'Travel')

            createCollectionItem('wikipedia.org/wiki/Genius', 'Genius')

            createCollectionItem('wikipedia.org/wiki/Human', 'Human')

            createCollectionItem('wikipedia.org/wiki/Indigenous_peoples', 'Indigenous peoples')


            createHeader('Philosophy and thinking')


            createCollectionItem('wikipedia.org/wiki/Philosophy', 'Philosophy')

            createCollectionItem('wikipedia.org/wiki/Being', 'Being')

            createCollectionItem('wikipedia.org/wiki/Common_sense', 'Common sense')

            createCollectionItem('wikipedia.org/wiki/Futurology', 'Futurology')

            createCollectionItem('wikipedia.org/wiki/Goodness_and_value_theory', 'Goodness and value theory')

            createCollectionItem('wikipedia.org/wiki/Happiness', 'Happiness')

            createCollectionItem('wikipedia.org/wiki/Meaning_of_life', 'Meaning of life')

            createCollectionItem('wikipedia.org/wiki/Mind', 'Mind')

            createCollectionItem('wikipedia.org/wiki/Rhetoric', 'Rhetoric')

            createCollectionItem('wikipedia.org/wiki/Space', 'Space')

            createCollectionItem('wikipedia.org/wiki/Eastern_philosophy', 'Eastern philosophy')

            createCollectionItem('wikipedia.org/wiki/Western_philosophy', 'Western philosophy')

            createCollectionItem('wikipedia.org/wiki/Aesthetics', 'Aesthetics')

            createCollectionItem('wikipedia.org/wiki/Ethics', 'Ethics')

            createCollectionItem('wikipedia.org/wiki/Epistemology', 'Epistemology')

            createCollectionItem('wikipedia.org/wiki/Logic', 'Logic')

            createCollectionItem('wikipedia.org/wiki/Metaphysics', 'Metaphysics')

            createCollectionItem('wikipedia.org/wiki/Philosophy_of_education', 'Education')

            createCollectionItem('wikipedia.org/wiki/Philosophy_of_Geography', 'Geography')

            createCollectionItem('wikipedia.org/wiki/Philosophy_of_history', 'History')

            createCollectionItem('wikipedia.org/wiki/Philosophical_anthropology', 'Human nature')

            createCollectionItem('wikipedia.org/wiki/Philosophy_of_language', 'Language')

            createCollectionItem('wikipedia.org/wiki/Philosophy_of_law', 'Law')

            createCollectionItem('wikipedia.org/wiki/Philosophy_and_literature', 'Literature')

            createCollectionItem('wikipedia.org/wiki/Philosophy_of_mathematics', 'Mathematics')

            createCollectionItem('wikipedia.org/wiki/Philosophy_of_mind', 'Mind')

            createCollectionItem('wikipedia.org/wiki/Meta-philosophy', 'Philosophy')

            createCollectionItem('wikipedia.org/wiki/Philosophy_of_physics', 'Physics')

            createCollectionItem('wikipedia.org/wiki/Political_philosophy', 'Politics')

            createCollectionItem('wikipedia.org/wiki/Philosophy_of_psychology', 'Psychology')

            createCollectionItem('wikipedia.org/wiki/Philosophy_of_religion', 'Religion')

            createCollectionItem('wikipedia.org/wiki/Philosophy_of_science', 'Science')

            createCollectionItem('wikipedia.org/wiki/Philosophy_of_social_science', 'Social science')

            createCollectionItem('wikipedia.org/wiki/Philosophy_of_technology', 'Technology')

            createCollectionItem('wikipedia.org/wiki/Philosophy_of_Culture', 'Culture')

            createCollectionItem('wikipedia.org/wiki/Analytic_philosophy', 'Analytic philosophy')

            createCollectionItem('wikipedia.org/wiki/Aristotelianism', 'Aristotelianism')

            createCollectionItem('wikipedia.org/wiki/Continental_Philosophy', 'Continental Philosophy')

            createCollectionItem('wikipedia.org/wiki/Critical_theory_(Frankfurt_School)', 'Critical theory')

            createCollectionItem('wikipedia.org/wiki/Deconstruction', 'Deconstructivism')

            createCollectionItem('wikipedia.org/wiki/Determinism', 'Determinism')

            createCollectionItem('wikipedia.org/wiki/Dialectical_materialism', 'Dialectical materialism')

            createCollectionItem('wikipedia.org/wiki/Empiricism', 'Empiricism')

            createCollectionItem('wikipedia.org/wiki/Existentialism', 'Existentialism')

            createCollectionItem('wikipedia.org/wiki/Hegelianism', 'Hegelianism')

            createCollectionItem('wikipedia.org/wiki/Hermeneutics', 'Hermeneutics')

            createCollectionItem('wikipedia.org/wiki/Humanism', 'Humanism')

            createCollectionItem('wikipedia.org/wiki/Idealism', 'Idealism')

            createCollectionItem('wikipedia.org/wiki/Kantianism', 'Kantianism')

            createCollectionItem('wikipedia.org/wiki/Logical_positivism', 'Logical Positivism')

            createCollectionItem('wikipedia.org/wiki/Materialism', 'Materialism')

            createCollectionItem('wikipedia.org/wiki/Neoplatonism', 'Neoplatonism')

            createCollectionItem('wikipedia.org/wiki/Nihilism', 'Nihilism')

            createCollectionItem('wikipedia.org/wiki/Objectivism_(Ayn_Rand)', 'Objectivism (Ayn Rand)')

            createCollectionItem('wikipedia.org/wiki/Ordinary_language_philosophy', 'Ordinary Language')

            createCollectionItem('wikipedia.org/wiki/Phenomenology_(philosophy)', 'Phenomenology')

            createCollectionItem('wikipedia.org/wiki/Platonism', 'Platonism')

            createCollectionItem('wikipedia.org/wiki/Positivism', 'Positivism')

            createCollectionItem('wikipedia.org/wiki/Postmodern_philosophy', 'Postmodernism')

            createCollectionItem('wikipedia.org/wiki/Poststructuralism', 'Poststructuralism')

            createCollectionItem('wikipedia.org/wiki/Pragmatism', 'Pragmatism')

            createCollectionItem('wikipedia.org/wiki/Pre-Socratic_philosophy', 'Presocratic')

            createCollectionItem('wikipedia.org/wiki/Rationalism', 'Rationalism')

            createCollectionItem('wikipedia.org/wiki/Reformational_philosophy', 'Reformational')

            createCollectionItem('wikipedia.org/wiki/Relativism', 'Relativism')

            createCollectionItem('wikipedia.org/wiki/Scholasticism', 'Scholasticism')

            createCollectionItem('wikipedia.org/wiki/Philosophical_skepticism', 'Skepticism')

            createCollectionItem('wikipedia.org/wiki/Stoicism', 'Stoicism')

            createCollectionItem('wikipedia.org/wiki/Structuralism', 'Structuralism')

            createCollectionItem('wikipedia.org/wiki/Transhumanism', 'Transhumanism')

            createCollectionItem('wikipedia.org/wiki/Utilitarianism', 'Utilitarianism')

            createCollectionItem('wikipedia.org/wiki/Thought', 'Thinking')

            createCollectionItem('wikipedia.org/wiki/Awareness', 'Awareness')

            createCollectionItem('wikipedia.org/wiki/Creativity', 'Creative processes')

            createCollectionItem('wikipedia.org/wiki/Decision_making', 'Decision making')

            createCollectionItem('wikipedia.org/wiki/Heuristic', 'Heuristic')

            createCollectionItem('wikipedia.org/wiki/Learning', 'Learning')

            createCollectionItem('wikipedia.org/wiki/Memory', 'Memory')

            createCollectionItem('wikipedia.org/wiki/Problem_solving', 'Problem solving')

            createCollectionItem('wikipedia.org/wiki/Reason', 'Reason')

            createCollectionItem('wikipedia.org/wiki/Teaching', 'Teaching')

            createCollectionItem('wikipedia.org/wiki/Value_theory', 'Value theory')

            createCollectionItem('wikipedia.org/wiki/Cognitive_bias', 'Cognitive bias')

            createCollectionItem('wikipedia.org/wiki/Cognitive_distortion', 'Cognitive distortion')

            createCollectionItem('wikipedia.org/wiki/Fallacy', 'Fallacy')

            createCollectionItem('wikipedia.org/wiki/Fallacies_of_definition', 'Fallacies of definition')

            createCollectionItem('wikipedia.org/wiki/Informal_fallacy', 'Logical fallacy')

            createCollectionItem('wikipedia.org/wiki/Target_fixation', 'Target fixation')

            createCollectionItem('wikipedia.org/wiki/Genius', 'Genius')

            createCollectionItem('wikipedia.org/wiki/High_IQ_society', 'High IQ society')

            createCollectionItem('wikipedia.org/wiki/Philomath', 'Philomath')

            createCollectionItem('wikipedia.org/wiki/Polymath', 'Polymath')



            createHeader('Society and social sciences')



            createCollectionItem('wikipedia.org/wiki/Social_sciences', 'Social sciences')

            createCollectionItem('wikipedia.org/wiki/Society', 'Society')

            createCollectionItem('wikipedia.org/wiki/Science', 'Science')

            createCollectionItem('wikipedia.org/wiki/Scientific_method', 'Scientific method')

            createCollectionItem('wikipedia.org/wiki/Social_sciences', 'Social sciences')

            createCollectionItem('wikipedia.org/wiki/Anthropology', 'Anthropology')

            createCollectionItem('wikipedia.org/wiki/Archaeology', 'Archaeology')

            createCollectionItem('wikipedia.org/wiki/Cognitive_science', 'Cognitive science')

            createCollectionItem('wikipedia.org/wiki/Communication_studies', 'Communication studies')

            createCollectionItem('wikipedia.org/wiki/Critical_theory', 'Critical theory')

            createCollectionItem('wikipedia.org/wiki/Cultural_studies', 'Cultural studies')

            createCollectionItem('wikipedia.org/wiki/Development_studies', 'Development studies')

            createCollectionItem('wikipedia.org/wiki/Economics', 'Economics')

            createCollectionItem('wikipedia.org/wiki/Education', 'Education')

            createCollectionItem('wikipedia.org/wiki/Geography', 'Geography')

            createCollectionItem('wikipedia.org/wiki/History', 'History')

            createCollectionItem('wikipedia.org/wiki/Linguistics', 'Linguistics')


            createCollectionItem('wikipedia.org/wiki/Law', 'Law')

            createCollectionItem('wikipedia.org/wiki/Political_science', 'Political science')

            createCollectionItem('wikipedia.org/wiki/Psychology', 'Psychology')

            createCollectionItem('wikipedia.org/wiki/Social_policy', 'Social policy')

            createCollectionItem('wikipedia.org/wiki/Sociology', 'Sociology')

            createCollectionItem('wikipedia.org/wiki/Society', 'Society')

            createCollectionItem('wikipedia.org/wiki/Ethnic_group', 'Ethnic groups')

            createCollectionItem('wikipedia.org/wiki/Group_(sociology)', 'Group')

            createCollectionItem('wikipedia.org/wiki/Infrastructure', 'Infrastructure')

            createCollectionItem('wikipedia.org/wiki/People', 'People')

            createCollectionItem('wikipedia.org/wiki/Community', 'Community')

            createCollectionItem('wikipedia.org/wiki/Structure_and_agency', 'Structure and agency')

            createCollectionItem('wikipedia.org/wiki/Socialization', 'Socialization')

            createCollectionItem('wikipedia.org/wiki/Sense_of_community', 'Sense of community')

            createCollectionItem('wikipedia.org/wiki/Communitarianism', 'Communitarianism')

            createCollectionItem('wikipedia.org/wiki/Social_capital', 'Social capital')

            createCollectionItem('wikipedia.org/wiki/Community_development', 'Community development')

            createCollectionItem('wikipedia.org/wiki/Social_development', 'Social development')

            createCollectionItem('wikipedia.org/wiki/Decadence', 'Decadence')

            createCollectionItem('wikipedia.org/wiki/Social_progress', 'Social progress')

            createCollectionItem('wikipedia.org/wiki/Technological_evolution', 'Technological evolution')

            createCollectionItem('wikipedia.org/wiki/Sociocultural_evolution', 'Sociocultural evolution')

            createCollectionItem('wikipedia.org/wiki/Hunter-gatherer', 'Hunter-gatherer')

            createCollectionItem('wikipedia.org/wiki/Social_rank', 'Social rank')

            createCollectionItem('wikipedia.org/wiki/Tribe', 'Tribes')

            createCollectionItem('wikipedia.org/wiki/Social_stratification', 'Social stratification')

            createCollectionItem('wikipedia.org/wiki/Chiefdom', 'Chiefdoms')

            createCollectionItem('wikipedia.org/wiki/Neolithic_Revolution', 'Neolithic Revolution')

            createCollectionItem('wikipedia.org/wiki/Civilization', 'Civilization')

            createCollectionItem('wikipedia.org/wiki/Agrarian_society', 'Agrarian society')

            createCollectionItem('wikipedia.org/wiki/Pre-industrial_society', 'Pre-industrial society')

            createCollectionItem('wikipedia.org/wiki/Village', 'villages')

            createCollectionItem('wikipedia.org/wiki/Town', 'Towns')

            createCollectionItem('wikipedia.org/wiki/City', 'Cities')

            createCollectionItem('wikipedia.org/wiki/City-state', 'City-states')

            createCollectionItem('wikipedia.org/wiki/Nation-state', 'Nation-states')

            createCollectionItem('wikipedia.org/wiki/Industrial_Revolution', 'Industrial Revolution')

            createCollectionItem('wikipedia.org/wiki/Modernity', 'Modern')

            createCollectionItem('wikipedia.org/wiki/Industrial_society', 'Industrial society')

            createCollectionItem('wikipedia.org/wiki/Postmodernity', 'Postmodern')

            createCollectionItem('wikipedia.org/wiki/Post-industrial_society', 'Post-industrial society')

            createCollectionItem('wikipedia.org/wiki/Informational_Revolution', 'Informational Revolution')

            createCollectionItem('wikipedia.org/wiki/Information_society', 'Information society')

            createCollectionItem('wikipedia.org/wiki/Digital_Revolution', 'Digital Revolution')

            createCollectionItem('wikipedia.org/wiki/Globalization', 'Globalization')

            createCollectionItem('wikipedia.org/wiki/World_government', 'World government')

            createCollectionItem('wikipedia.org/wiki/Space_colonization', 'Space colonization')

            createCollectionItem('wikipedia.org/wiki/Technological_singularity', 'Technological singularity')

            createCollectionItem('wikipedia.org/wiki/Social_organization', 'Social institutions')

            createCollectionItem('wikipedia.org/wiki/Organization', 'Organization')

            createCollectionItem('wikipedia.org/wiki/Family', 'Family')

            createCollectionItem('wikipedia.org/wiki/Home', 'Home')

            createCollectionItem('wikipedia.org/wiki/Infrastructure', 'Infrastructure')

            createCollectionItem('wikipedia.org/wiki/Electric_power', 'Electric power')

            createCollectionItem('wikipedia.org/wiki/Automobile', 'Automobiles')

            createCollectionItem('wikipedia.org/wiki/Personal_computer', 'Personal computers')

            createCollectionItem('wikipedia.org/wiki/Real_estate', 'Real estate')

            createCollectionItem('wikipedia.org/wiki/Economy', 'Economy')

            createCollectionItem('wikipedia.org/wiki/Business', 'Business')

            createCollectionItem('wikipedia.org/wiki/Finance', 'Finance')

            createCollectionItem('wikipedia.org/wiki/Management', 'Management')

            createCollectionItem('wikipedia.org/wiki/Marketing', 'Marketing')

            createCollectionItem('wikipedia.org/wiki/Franchising', 'Franchising')

            createCollectionItem('wikipedia.org/wiki/Education', 'Education')

            createCollectionItem('wikipedia.org/wiki/Academia', 'Academia')

            createCollectionItem('wikipedia.org/wiki/Learning', 'Learning')

            createCollectionItem('wikipedia.org/wiki/School', 'School')

            createCollectionItem('wikipedia.org/wiki/Student', 'Student')

            createCollectionItem('wikipedia.org/wiki/Study_skills', 'Study skills')

            createCollectionItem('wikipedia.org/wiki/Civil_society', 'Civil society')

            createCollectionItem('wikipedia.org/wiki/Government', 'Government')

            createCollectionItem('wikipedia.org/wiki/Politics', 'Politics')

            createCollectionItem('wikipedia.org/wiki/Law', 'Law')

            createCollectionItem('wikipedia.org/wiki/Criminal_justice', 'Criminal justice')

            createCollectionItem('wikipedia.org/wiki/Social_network', 'Social network')

            createCollectionItem('wikipedia.org/wiki/Communication', 'Communication')

            createCollectionItem('wikipedia.org/wiki/Journalism', 'Journalism')

            createCollectionItem('wikipedia.org/wiki/Social_capital', 'Social capital')


            createHeader('Technology and applied sciences')


            createCollectionItem('wikipedia.org/wiki/Technology', 'Technology')

            createCollectionItem('wikipedia.org/wiki/Applied_science', 'Applied science')

            createCollectionItem('wikipedia.org/wiki/Doomsday_device', 'Doomsday device')

            createCollectionItem('wikipedia.org/wiki/High_technology', 'High technology')

            createCollectionItem('wikipedia.org/wiki/History_of_technology', 'History of technology')

            createCollectionItem('wikipedia.org/wiki/Industry', 'Industry')

            createCollectionItem('wikipedia.org/wiki/Innovation', 'Innovation')

            createCollectionItem('wikipedia.org/wiki/Knowledge_economy', 'Knowledge economy')

            createCollectionItem('wikipedia.org/wiki/Persuasion_technology', 'Persuasion technology')

            createCollectionItem('wikipedia.org/wiki/Pollution', 'Pollution')

            createCollectionItem('wikipedia.org/wiki/Posthumanism', 'Posthumanism')

            createCollectionItem('wikipedia.org/wiki/Precautionary_principle', 'Precautionary principle')

            createCollectionItem('wikipedia.org/wiki/Research_and_development', 'Research and development')

            createCollectionItem('wikipedia.org/wiki/Strategy_of_technology', 'Strategy of technology')

            createCollectionItem('wikipedia.org/wiki/Superpower', 'Superpowers')

            createCollectionItem('wikipedia.org/wiki/Technocapitalism', 'Technocapitalism')

            createCollectionItem('wikipedia.org/wiki/Technocriticism', 'Technocriticism')

            createCollectionItem('wikipedia.org/wiki/Techno-progressivism', 'Techno-progressivism')

            createCollectionItem('wikipedia.org/wiki/Technological_convergence', 'Technological convergence')

            createCollectionItem('wikipedia.org/wiki/Technological_evolution', 'Technological evolution')

            createCollectionItem('wikipedia.org/wiki/Technological_determinism', 'Technological determinism')

            createCollectionItem('wikipedia.org/wiki/Diffusion_(business)', 'Technological diffusion')

            createCollectionItem('wikipedia.org/wiki/Technological_singularity', 'Technological singularity')

            createCollectionItem('wikipedia.org/wiki/Technology_assessment', 'Technology assessment')

            createCollectionItem('wikipedia.org/wiki/Technology_lifecycle', 'Technology lifecycle')

            createCollectionItem('wikipedia.org/wiki/Technology_transfer', 'Technology transfer')

            createCollectionItem('wikipedia.org/wiki/Technology_Tree', 'Technology Tree')

            createCollectionItem('wikipedia.org/wiki/Technorealism', 'Technorealism')

            createCollectionItem('wikipedia.org/wiki/Timeline_of_invention', 'Timeline of invention')

            createCollectionItem('wikipedia.org/wiki/Transhumanism', 'Transhumanism')

            createCollectionItem('wikipedia.org/wiki/List_of_basic_technology_topics', 'Technologies')

            createCollectionItem('wikipedia.org/wiki/Applied_sciences', 'applied sciences')

            createCollectionItem('wikipedia.org/wiki/Aerospace', 'Aerospace')

            createCollectionItem('wikipedia.org/wiki/Agriculture', 'Agriculture')

            createCollectionItem('wikipedia.org/wiki/Agricultural_science', 'Agricultural science')

            createCollectionItem('wikipedia.org/wiki/Agronomy', 'Agronomy')

            createCollectionItem('wikipedia.org/wiki/Architecture', 'Architecture')

            createCollectionItem('wikipedia.org/wiki/Artificial_intelligence', 'Artificial intelligence')

            createCollectionItem('wikipedia.org/wiki/Automation', 'Automation')

            createCollectionItem('wikipedia.org/wiki/Automobile', 'Automobile')

            createCollectionItem('wikipedia.org/wiki/Big_Science', 'Big Science')

            createCollectionItem('wikipedia.org/wiki/Biotechnology', 'Biotechnology')

            createCollectionItem('wikipedia.org/wiki/Cartography', 'Cartography')

            createCollectionItem('wikipedia.org/wiki/Communication', 'Communication')

            createCollectionItem('wikipedia.org/wiki/Computing', 'Computing')

            createCollectionItem('wikipedia.org/wiki/Computer_science', 'Computer science')



            createCollectionItem('wikipedia.org/wiki/Information_systems', 'Information systems')

            createCollectionItem('wikipedia.org/wiki/Information_technology', 'Information technology')

            createCollectionItem('wikipedia.org/wiki/Computer_programming', 'Programming')

            createCollectionItem('wikipedia.org/wiki/Software_engineering', 'Software engineering')

            createCollectionItem('wikipedia.org/wiki/Computer_engineering', 'Computer engineering')

            createCollectionItem('wikipedia.org/wiki/Construction', 'Construction')

            createCollectionItem('wikipedia.org/wiki/Design', 'Design')

            createCollectionItem('wikipedia.org/wiki/Electronics', 'Electronics')

            createCollectionItem('wikipedia.org/wiki/Energy_development', 'Energy development')

            createCollectionItem('wikipedia.org/wiki/Energy_storage', 'Energy storage')

            createCollectionItem('wikipedia.org/wiki/Engineering', 'Engineering')

            createCollectionItem('wikipedia.org/wiki/Chemical_engineering', 'Chemical engineering')

            createCollectionItem('wikipedia.org/wiki/Civil_engineering', 'Civil engineering')

            createCollectionItem('wikipedia.org/wiki/Electrical_engineering', 'Electrical engineering')

            createCollectionItem('wikipedia.org/wiki/Mechanical_engineering', 'Mechanical engineering')

            createCollectionItem('wikipedia.org/wiki/Ergonomics', 'Ergonomics')

            createCollectionItem('wikipedia.org/wiki/Firefighting', 'Firefighting')

            createCollectionItem('wikipedia.org/wiki/Food_science', 'Food science')

            createCollectionItem('wikipedia.org/wiki/Forensics', 'Forensics')

            createCollectionItem('wikipedia.org/wiki/Forestry', 'Forestry')

            createCollectionItem('wikipedia.org/wiki/Free_software', 'Free software')

            createCollectionItem('wikipedia.org/wiki/Health_sciences', 'Health sciences')

            createCollectionItem('wikipedia.org/wiki/Health_Informatics', 'Health Informatics')

            createCollectionItem('wikipedia.org/wiki/Industry', 'Industry')

            createCollectionItem('wikipedia.org/wiki/Information_science', 'Information science')

            createCollectionItem('wikipedia.org/wiki/Library_and_information_science', 'Library and information science')

            createCollectionItem('wikipedia.org/wiki/Internet', 'Internet')

            createCollectionItem('wikipedia.org/wiki/Machine', 'Machines')

            createCollectionItem('wikipedia.org/wiki/Management', 'Management')

            createCollectionItem('wikipedia.org/wiki/Manufacturing', 'Manufacturing')

            createCollectionItem('wikipedia.org/wiki/Mass_communication', 'Mass communication')

            createCollectionItem('wikipedia.org/wiki/Mass_production', 'Mass production')

            createCollectionItem('wikipedia.org/wiki/Medicine', 'Medicine')


            createCollectionItem('wikipedia.org/wiki/Military_science', 'Military science')

            createCollectionItem('wikipedia.org/wiki/Military_technology_and_equipment', 'Military technology and equipment')

            createCollectionItem('wikipedia.org/wiki/Mining', 'Mining')

            createCollectionItem('wikipedia.org/wiki/Nanotechnology', 'Nanotechnology')

            createCollectionItem('wikipedia.org/wiki/Nuclear_technology', 'Nuclear technology')

            createCollectionItem('wikipedia.org/wiki/Packaging_and_labeling', 'Packaging and labeling')

            createCollectionItem('wikipedia.org/wiki/Process_(engineering)', 'Processes')

            createCollectionItem('wikipedia.org/wiki/Robotics', 'Robotics')

            createCollectionItem('wikipedia.org/wiki/Space_exploration', 'Space exploration')

            createCollectionItem('wikipedia.org/wiki/Technology_forecasting', 'Technology forecasting')

            createCollectionItem('wikipedia.org/wiki/Telecommunications', 'Telecommunications')

            createCollectionItem('wikipedia.org/wiki/Tool', 'Tools')

            createCollectionItem('wikipedia.org/wiki/Transport', 'Transport')

            createCollectionItem('wikipedia.org/wiki/Vehicle', 'Vehicles')

            createCollectionItem('wikipedia.org/wiki/Weapon', 'Weapons')


        } else if (page == 'navBar') {

            modals.el.appendChild(closeModal);
            modals.el.classList.remove('collectionModal');
            modals.el.classList.remove('helpModal');
            modals.el.className = 'navBarModal';

            /* Edit list of suggested sites here */

            createHeader('Common')
            createListItem('www.reddit.com', 'Reddit')
            createListItem('www.wikipedia.org/en/', 'Wikipedia')
            createListItem('www.youtube.com', 'Youtube')
            createListItem('www.news.google.com', 'Google News')

            createHeader('Plan')
            createListItem('www.asana.com', 'Asana')
            createListItem('www.freedcamp.com', 'Freedcamp')
            createListItem('www.trello.com', 'Trello')
            createListItem('www.getflow.com', 'Flow')

            // createHeader('Research')

            createHeader('Communicate')
            createListItem('www.gmail.com', 'Google Mail')
            createListItem('www.zoho.com/mail/', 'Zoho Mail')
            createListItem('www.slack.com', 'Slack')
            createListItem('www.fleep.io', 'Fleep')

            createHeader('Document')
            createListItem('www.docs.google.com', 'Google Docs')
            createListItem('www.zoho.com/writer/', 'Zoho Writer')
            createListItem('www.onlyoffice.com', 'Onlyoffice')
            createListItem('www.dropbox.com/paper', 'Dropbox Paper')


            createHeader('Design')
            createListItem('www.canva.com', 'Canva')
            createListItem('www.tinkercad.com/', 'Tinkercad')
            createListItem('www.pixlr.com', 'Pixlr')
            createListItem('www.vectr.com', 'Vectr')


            createHeader('Present')
            createListItem('www.canva.com/create/presentations', 'Canva Presentations')
            createListItem('www.google.com/slides', 'Google Slides')
            createListItem('www.zoho.eu/docs/show.html', 'Zoho Show')
            createListItem('www.slidebean.com', 'Slidebean')

        } else if (page == 'help') {
            modals.el.classList.remove('navBarModal')
            modals.el.classList.remove('collectionModal')
            modals.el.className = 'helpModal'


            let showOnStartLabel = document.createElement("label")
            showOnStartLabel.id = "showOnStartLabel"
            showOnStartLabel.setAttribute("for", "showOnStartCheckbox")
            showOnStartLabel.className = "showOnStart"
            showOnStartLabel.innerText = 'Show this help'

            let showOnStartCheckbox = document.createElement('input')
            showOnStartCheckbox.type = "checkbox"
            showOnStartCheckbox.id = "showOnStartCheckbox"
            showOnStartCheckbox.display = "none"

            // let h1Heading = document.createElement('h1')
            // h1Heading.id = 'helpHeading'
            // h1Heading.innerText = 'Greetings!'

            createHeader("Greetings!")
            addElement('p', "Miniature — web browser that helps navigate faster and manage pages better increasing one's awareness and performance.", "intro")
            addElement('p', "It introduces contextualization, features recommendation system and has strong overview capabilities.", "intro")
            addElement('p', "Miniature is free and open source software. It is in alpha state and considered a work in progress.", 'intro')
            addElement('p', "You may open this intro & help screen by pressing 'F1' button on keyboard anytime", "intro")
            addElement('p', "Below you may find quick demonstration to help get you started.", "intro")
            addElement('p', "If you have any questions & suggestions please mail me: doreminiature@gmail.com (Andrey)", "intro")
            addElement('p', "Have a good day!", "intro")

            // let donorBox = document.createElement("a")
            // donorBox.setAttribute("href", "https://donorbox.org/miniature")
            // donorBox.setAttribute('data-links', "https://donorbox.org/miniature")
            // donorBox.classList.add('openTabsNOW')
            // donorBox.innerText = 'Support Miniature development'

            subheader("Switching tabs")
            addGif("http://i.imgur.com/KIRRR0k.gif")
            subheader("Adding new tab")
            addGif("http://i.imgur.com/sp29dG2.gif")
            subheader("Editing tab")
            addGif("http://i.imgur.com/JlyS7wA.gif")
            subheader("Switching collections (context)")
            addGif("http://i.imgur.com/HMKNFh5.gif")
            subheader("Giving collection a name")
            addGif("http://i.imgur.com/DmxFVkf.gif")
            subheader("Overview sidebar")
            addGif("http://i.imgur.com/5mlJEjA.gif")

            modals.el.appendChild(closeModal)
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

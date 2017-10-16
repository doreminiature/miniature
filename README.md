![Miniature Mockup](https://i.imgur.com/AM7V5kL.png)
**[Download Miniature Alpha](http://drive.google.com/open?id=0BxM0OR4P5TsjYnJBUmM4bDF3ODg)**. Windows build with Linux & Mac builds coming soon.

4.6 bn web pages!:
------
Hi, Andrey here, designer and captain at Miniature ship.
Did you know that there are 4.6 billion pages on the web? Me either.

While living in the Information age we enjoy wide access to information we have yet to solve its biggest problem — information overload.
Information overload possesses a serious threat to own productivity and even psychological comfort if not managed well.

Procrastination, diminished productivity, poor concentration, stress and fatigue are among common symptoms caused by information overload.
Unfortunately mainstream web browsers do very little to aсknowledge and solve this problem.

Fortunately with Miniature we are changing this!

Solution
------
Miniature desktop & mobile — web browser that helps navigate faster and manage pages better increasing one's awareness and performance.
It introduces **contextualization**, features **recommendation system** and has strong **overview capabilities**.

Miniature goal is to solve [information overload](https://en.wikipedia.org/wiki/Information_overload) dilemma and connect users with best knowledge on the web.

Demo:
------
**Switching tabs:**

![alt](http://i.imgur.com/KIRRR0k.gif)


**Adding new tab:**

![alt](http://i.imgur.com/sp29dG2.gif)


**Editing tab:**

![alt](http://i.imgur.com/JlyS7wA.gif)


**Switching collections (context):**

![alt](http://i.imgur.com/HMKNFh5.gif)


**Giving collection a name:**

![alt](http://i.imgur.com/DmxFVkf.gif)


**Overview sidebar:**

![alt](http://i.imgur.com/5mlJEjA.gif)




Developers:
------

Use `Miniature-development` branch for development and `master` when building.

* Download [Electron](https://github.com/electron/electron/releases).
* Install [Node](https://nodejs.org) and [Grunt](http://gruntjs.com).
* Clone 'https://github.com/doreminiature/miniature.git'
* `npm i`.
* Run: `/Path/To/Electron /Path/To/Miniature`.
* Develop: `grunt dev`. Browser chrome will update on source file saves.
* Build distributive: `grunt windowsBuild`, `grunt macBuild`, `grunt linuxBuild`. Builds to `/Path/To/Miniature/dist`

If you are using OS X, install [Homebrew](http://brew.sh), then run `brew install fakeroot dpkg`.
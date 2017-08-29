window.electron = require('electron')
window.ipc = electron.ipcRenderer
window.remote = electron.remote
window.Dexie = require('dexie')
// var $ = require("jquery")
var fs = require("fs")
// var request = require('request').defaults({ encoding: null })

var events = require('events')
var eventEmitter = new events.EventEmitter() // addTab, openPage, loadFinish, back,  forward, updatePage, goToCollection, renderOverlay, windowClose



// disable dragdrop, since it currently doesn't work
window.addEventListener('drop', function (e) {
  e.preventDefault()
})

// add a class to the body for fullscreen status

ipc.on('enter-full-screen', function () {
  console.log('enter-full-screen')
  document.body.classList.add('fullscreen')
})

ipc.on('leave-full-screen', function () {
  console.log('leave-full-screen')
  document.body.classList.remove('fullscreen')
})

window.addEventListener('load', function (e) {
  if (navigator.platform !== 'MacIntel') {
    document.body.classList.add('notMac')
  }

})

say = {

  m (text) {
    console.log('%c ' + text, 'background:green;color:#fff;padding:2px 10px 2px 5px')
  },
  d (text) {
    console.log('%c ' + text, 'background:#e4a530;color:#fff;margin-left:50px;padding:2px 20px')
  },
  dd (text, param) {
    console.log('%c ' + text + ' ' + param, 'background:#e4a530;color:#fff;margin-left:50px;padding:2px 20px')
  },
  o (obj) {
    console.log(obj)
  }
}


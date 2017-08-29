
var back = document.getElementById('back')
var forward = document.getElementById('forward')
var refresh = document.getElementById('refresh')
var menu = document.getElementById('menu')

back.addEventListener('click', function () {
    getWebview(tabs.getSelected()).goBack()
  // eventEmitter
  eventEmitter.emit('back')
  //console.warn("eventEmitter", "back")
  // eventEmitter //
})

forward.addEventListener('click', function () {
    getWebview(tabs.getSelected()).goForward()
  // eventEmitter
  eventEmitter.emit('forward')
  //console.warn("eventEmitter", "forward")
  // eventEmitter //
})

refresh.addEventListener('click', function () {
    getWebview(tabs.getSelected()).reload()
})

menu.addEventListener('click', function () {
  /*getScreen(function(image) {
    console.log('image', image)
  })*/
})
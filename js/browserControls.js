
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



BC = {

  START(){
    BC.EVENTS()
  }, EVENTS(){
    eventEmitter.on( 'startLoadingPage', () => { BC.SET_ICONS() })
    eventEmitter.on( 'stopLoadingPage', () => { BC.SET_ICONS() })
    eventEmitter.on( 'goToCollection', () => { BC.SET_ICONS() })
    eventEmitter.on( 'updatePage', () => { BC.SET_ICONS() })
    eventEmitter.on( 'updateFavicon', () => { BC.SET_ICONS() })
    eventEmitter.on( 'renderOverlay', () => { BC.SET_ICONS() })
    eventEmitter.on( 'addTab', () => { BC.SET_ICONS() })
    eventEmitter.on( 'windowClose', () => { BC.SET_ICONS() })
  },

  SET_ICONS(){

    try {
      if( getWebview(tabs.getSelected()).canGoBack() == false){
        document.getElementById("back").style.opacity = "0.2"
      } else {
        document.getElementById("back").style.opacity = "1"
      }
      if( getWebview(tabs.getSelected()).canGoForward() == false){
        document.getElementById("forward").style.opacity = "0.2"
      } else {
        document.getElementById("forward").style.opacity = "1"
      }
    } catch ( e ){}

  }

}
BC.START()
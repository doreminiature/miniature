var addTabButton = document.getElementById('add-tab-button')

addTabButton.addEventListener('click', function (e) {

  // !!!
  var newTab = tabs.add({}, tabs[0])
  addTab(newTab)

  eventEmitter.emit( 'addTab' )

})

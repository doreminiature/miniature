var addTabButton = document.getElementById('add-tab-button')

addTabButton.addEventListener('click', function (e) {

  // var newTab = tabs.add({}, tabs.getIndex(tabs.getSelected()) + 1)
  // var newTab = tabs.add({}, 1)
  var newTab = tabs.add({}, tabs[0])
  // var newTab = tabs.add({})
  // var newTab = tabs.put({})
  // alert( tabs.getIndex(tabs.getSelected()) + 1 )
  addTab(newTab)

  // for( let i = 0; i < tabState.tasks.length; i++ ){
  //   if( tabState.tasks[ i ].id == tabState.selectedTask){
  //     // for( let j = 0; j < tabState.tasks[0].tabs.length; j++ ){
  //     //   console.log( ' === ', i, tabState.tasks[ i ].id, tabState.selectedTask )
  //     //
  //     // }
  //     let a1 = tabState.tasks[ i ].tabs[1]
  //     let a0 = tabState.tasks[ i ].tabs[0]
  //     tabState.tasks[ i ].tabs[0] = a1
  //     tabState.tasks[ i ].tabs[1] = a0
  //   }
  //
  // }


  // let a1 = tabState.tasks[0].tabs[1]
  // let a0 = tabState.tasks[0].tabs[0]
  // tabState.tasks[0].tabs[0] = a1
  // tabState.tasks[0].tabs[1] = a0

  //
  // rerenderTabstrip()
  // switchToTab(newTab, {
  //   focusWebview: false
  // })
  //
  // sessionRestore.save()
  // CT.render()

  eventEmitter.emit( 'addTab' )

})

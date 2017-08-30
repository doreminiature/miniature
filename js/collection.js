//
// collection = {
//  start(){
//    collection.add5()
//    collection.event()
//    collection.input()
//  },
//   event(){
//     eventEmitter.addListener('collectionTabsRender', function () {
//       collection.input()
//     })
//  },
//   input(){
//     let dataIndex
//     let nameInDB
//     let t
//     $('.collection-tab').hover(function () {
//       dataIndex = $(this).data('index')
//       nameInDB = tabState.tasks[dataIndex].name
//       if(nameInDB == undefined || nameInDB == null || nameInDB == 'null')
//         nameInDB = ''
//       t = this
//
//       $(this).find('svg').remove()
//       $(this).text('')
//
//
//       console.log(nameInDB)
//
//       $(this).append('<input type="text" value="' + nameInDB + '">')
//     })
//     $('.collection-tab').mouseout(function () {
//       if($(this).find('input').val() != undefined || $(this).find('input').val() != null){
//         tabState.tasks[dataIndex].name = $(this).find('input').val()
//       }
//
//       if(nameInDB === undefined || nameInDB === null){
//         if($(t).find( "svg" ).length == 0){
//           $(t).append('<svg width="23.9px" height="5.6px">23.9 5.6 <use xlink:href="icons/svg/miniature-controls.svg#ellipsis-big"></use></svg>')
//         }
//       }
//     })
//
//     $('.collection-tab').mouseleave(function () {
//       collectionTabs().render()
//     })
//
//   },
//   add5(){
//       if(tabState.tasks.length < 5){
//         for (let i = tabState.tasks.length; i != 5; i++){
//           $('#add-task').click()
//         }
//       }
//
//   }
// }
// collection.start()
//
//




//





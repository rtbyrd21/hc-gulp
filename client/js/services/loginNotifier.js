app.value('myToastr', toastr);

app.factory('myNotifier', function(myToastr){
  return{
    notify: function(msg){
      myToastr.success(msg);
      console.log(msg);
    }
  }
})
//Judder.LoginController = Ember.ObjectController.extend({
//  actions: {
//    login: function () {
//      //debugger
//      var m = this.model;
//      console.log(m);

//      this.transitionToRoute('inventories');
//    },
//    logout: function () {
//    }
//  }
//});

//Judder.LoginRoute = Ember.Route.extend({
//  setupController: function () {

//    var obj = {
//      user: this.store.createRecord('user', { name: 'tomster', email: 'invalidEmail' })
//    }; 

//    this.controller.set('model', obj)

//  },
//  //model: function (usr) {
//  //  var obj = {
//  //    user: usr
//  //  };

//  //  console.log(obj);

//  //  return obj;
//  //}
//});

//Judder.LoginController = Ember.ObjectController.extend({
//  fullName: function () {
//    return this.get("first") + " " + this.get("last");
//  }.property("first", "last")
//});
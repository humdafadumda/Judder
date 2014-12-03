
Judder.InventoriesRoute = Ember.Route.extend(
  {

    model: function () {
      return this.store.findAll("inventory");
    }
  });

Judder.InventoriesController = Ember.ArrayController.extend(
  {
    needs: ['login'],
    user: Ember.computed.alias("controllers.login")
  });

Judder.InventoriesIndexController = Ember.ArrayController.extend(
  {
    needs: ['login'],
    user: Ember.computed.alias("controllers.login"),
    

  });

Judder.InventoriesIndexRoute = Ember.Route.extend(
  {
    
    model: function ()
    {
      user: { name: 'rudy'}
    }    
  });

Judder.LoginController = Ember.ObjectController.extend({
  actions: {
    login: function () {
      //debugger
      var m = this.model;
      console.log(m);

      this.transitionToRoute('inventories');
    },
    logout: function () {
    }
  }
});

Judder.LoginRoute = Ember.Route.extend({
  setupController: function () {

    var obj = {
      user: this.store.createRecord('user', { name: 'tomster', email: 'invalidEmail' })
    };

    this.controller.set('model', obj)

  },
});
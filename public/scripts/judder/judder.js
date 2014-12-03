$(function () {
  $(document).foundation();
})

window.Judder = Ember.Application.create(
  {
    rootElement: '#judder-app',
    LOG_TRANSITIONS: true
  });

Judder.ApplicationSerializer = DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    details: { embedded: 'always' }
  }
});

Judder.ApplicationView = Em.View.extend({

  didInsertElement: function () {
    this.$().foundation('topbar');
    this.$().foundation('clearing');
  },

  willDestroyElement: function () {
    this.$().foundation('topbar', 'off');
    this.$().foundation('clearing', 'off');
  }
});

//DS => Data Store
Judder.ApplicationAdapter = DS.FixtureAdapter.extend({});

/*MOCKUP DATA*/















/*
Judder.Router.map(function () {
  this.resource("settings", { path: "/templates" },
    function () {
      this.route("sequences");
    });

  this.resource("sequences", { path: "/templates/settings" },
    function () {
      this.route("sequences");
    });

  this.resource("statusses", { path: "statusses" });
  this.resource("detail_statusses");
});
*/

/*, { path: "sequences" }, function () {
        this.route("settings");
      });*/
/*App.ApplicationView = Em.View.extend({

  didInsertElement: function() {
    this.$().foundation('topbar');
  },

  willDestroyElement: function() {
    this.$().foundation('topbar', 'off');
  }
});*/
/*App.IndexView = Ember.View.extend({
  // Navbar
  didInsertElement: function() {
    this.$().foundation('topbar');
    this.$().foundation('clearing');
  },
  willDestroyElement: function() {
    this.$().foundation('topbar', 'off');
    this.$().foundation('clearing', 'off');
  },
});
            
*/
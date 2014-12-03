Judder.Router.map(function () {

  this.resource('login', function () { });

  this.resource('settings', function () {
    this.resource('settings.sequences', { path: 'sequences' }, function () {
      this.resource('settings.sequences.sequence', { path: ':sequence_id' }, function () {
        this.route('edit_sequence', { path: 'edit' }, function () { });
      })
    });
  });

  this.resource('inventories', { path: 'inventories' }, function () {
    this.resource('inventories.inventory', { path: ':inventory_id' }, function () {
      this.route('edit_inventory', { path: 'edit' }, function () { });
    });
  });

  this.resource('products', { path: 'products' }, function () {
  });
});

//FIXTURES


//TOTD/


//// Planning
//this.resource('planning', function () {

//  // Planning Dashboard
//  this.route('home');

//  // Planning Visits
//  this.resource('planning.visits', { path: 'visits' }, function () {
//    this.resource('planning.visits.visit', { path: ':visit_id' }, function () {
//      this.route('tasks');
//      this.route('requirements');
//      this.route('issues');
//    });
//  });
//});

//Judder.Router.map(function () {
//  this.resource("settings", { path: "/templates" }, function () {

//  });
//  this.resource("sequences", function () { });
//});

//Judder.SettingsRoute = Ember.Route.extend({
//  renderTemplates: function () {
//    this.render('/templates/sequences');
//  }
//});


//Judder.Router.map(function () {
//  this.resource('settings', function ()
//  {
//    this.resource('sequences');
//    this.resource('statusses');
//  });

//});

//Judder.Router.map(function () {

//  this.resource('inventories', function () {
//    this.resource('inventory', { path: '/inventories/:id' });
//  });

//  this.resource('settings', function () {
//    this.resource('settings.sequences', { path: '/sequences' }, function () { this.route('settings.sequences.edit_sequence', function () { }) });
//    this.resource('settings.statusses', { path: '/statusses' }, function () { });
//    this.resource('settings.detailStatusses', { path: '/detailStatusses' }, function () { });
//  });
//});

//Judder.Router.map(function () {
//  this.resource('settings', function () {
//    this.resource('settings.sequences', function () {

//    });
//  });
//});

//Judder.Router.map(function () {
//  this.resource("settings", { path: "/templates" }, function () { this.resource("sequences", { path: "/templates/sequences" }, function () { }); });
//});

//Judder.Router.map(function () {
//this.resource("settings");
//this.resource("user", { path: "users/:user_id" }, function () {
//  this.route("editinfo", { path: "edit" });
//  this.route("changepassword", { path: "change-password" });
//  this.route("changeroles", { path: "edit-roles" });
//  this.route("addnote", { path: "add-note" });
//});
//});

/*
 * this.resource('eng', function(){
    this.route('home');
    this.route('aboutUs', {path: 'about-us'});
    this.route('newsArchive', {path: 'news-archive'});
    this.route('mattressesAreas', {path: 'mattresses-areas'});
    this.resource('eng.rent', {path: 'rent' }, function(){
        this.route('boulderSmall', {path: 'boulder-small'});
        this.route('boulderXl', {path: 'boulder-xl'});
        this.route('leadClimbing', {path: 'lead-climbing'});
        this.route('speedClimbing', {path: 'speed-climbing'});
        this.route('leadClimbingTurret', {path: 'lead-climbing-turret'});
        this.route('mattresses', {path: 'mattresses'});
    });
    this.resource('eng.factory', {path: 'factory'}, function(){
        this.route('panelType', {path: 'panel-type'});
        this.route('exteriorFinishing', {path: 'exterior-finishing'});
        this.route('buildingSystem', {path: 'building-system'});
        this.route('design');
    });
    this.resource('eng.holds', {path: 'holds'}, function(){
        this.route('importClimbingVolumes', {path: 'import-climbing-volumes'});
    });
    this.resource('eng.team', {path: 'team'}, function(){
        this.route('alePenna', {path: 'ale-penna'});
    });
    this.resource('eng.photoGallery', {path: 'photo-gallery'}, function(){
        this.route('evolutionClimbing', {path: 'evolution-climbing'});
        this.route('pragelatoBoulder', {path: 'pragelato-boulder'});
    });
    this.route('contacts');
    //error catch all
    this.route('404', { path: '*:' });

});
 */
///#source 1 1 /scripts/judder/models/user.js
Judder.User = DS.Model.extend({
  name: DS.attr(),
  email: DS.attr()
});
///#source 1 1 /scripts/judder/models/detail.js
Judder.Detail =  DS.Model.extend( {
  index: DS.attr("number"),
  description: DS.attr("string"),
  inventory: DS.belongsTo("inventory", { async: true }),
});
///#source 1 1 /scripts/judder/models/inventory.js
Judder.Inventory = DS.Model.extend({
  number: DS.attr("number"),
  sequence: DS.belongsTo("sequence", { async: true }),
  status: DS.belongsTo("status", { async: true }),
  details: DS.hasMany("detail", { async: true })
});


///#source 1 1 /scripts/judder/models/settings/detail_status.js
Judder.StatusDet = DS.Model.extend({
});
///#source 1 1 /scripts/judder/models/settings/sequence.js
Judder.Sequence = DS.Model.extend({
  
  code: DS.attr("string"),
  descriptions: DS.attr("string"),
});
///#source 1 1 /scripts/judder/models/settings/status.js
Judder.Status = DS.Model.extend(
{
  
  code: DS.attr("string"),
  descriptions: DS.attr("string"),
});

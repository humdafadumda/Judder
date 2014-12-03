Judder.Inventory = DS.Model.extend({
  number: DS.attr("number"),
  sequence: DS.belongsTo("sequence", { async: true }),
  status: DS.belongsTo("status", { async: true }),
  details: DS.hasMany("detail", { async: true })
});


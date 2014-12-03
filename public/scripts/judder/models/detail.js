Judder.Detail =  DS.Model.extend( {
  index: DS.attr("number"),
  description: DS.attr("string"),
  inventory: DS.belongsTo("inventory", { async: true }),
});
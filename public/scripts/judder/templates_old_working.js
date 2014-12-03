Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "inventories", options) : helperMissing.call(depth0, "link-to", "inventories", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n            <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "products", options) : helperMissing.call(depth0, "link-to", "products", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n            ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("Inventory");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("Products");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n            <li>Welcome back, <b>");
  stack1 = helpers._triageMustache.call(depth0, "user.firstName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</b>!</li>\r\n            ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "login", options) : helperMissing.call(depth0, "link-to", "login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n            ");
  return buffer;
  }
function program9(depth0,data) {
  
  
  data.buffer.push(" Login ");
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n            <li class=\"divider\"></li>\r\n            <li class=\"has-dropdown\">\r\n                <a href=\"#\" class=\"item fi-widget\">\r\n                </a>\r\n                <ul class=\"dropdown\">\r\n                    <li class=\"active\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings", options) : helperMissing.call(depth0, "link-to", "settings", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n                </ul>\r\n            </li>\r\n            ");
  return buffer;
  }
function program12(depth0,data) {
  
  
  data.buffer.push("Settings");
  }

  data.buffer.push("<nav class=\"top-bar\" data-topbar role=\"navigation\" data-options=\"is_hover: false\">\r\n    <ul class=\"title-area\">\r\n        <li class=\"name\">\r\n            <h1><a href=\"#\">JUDDER</a></h1>\r\n        </li>\r\n        <!-- Remove the class \"menu-icon\" to get rid of menu icon. Take out \"Menu\" to just have icon alone -->\r\n        <li class=\"toggle-topbar menu-icon\"><a href=\"\"><span>Menu</span></a></li>\r\n    </ul>\r\n\r\n    <section class=\"top-bar-section\">\r\n        <!-- Right Nav Section -->\r\n        <ul class=\"left\">\r\n            <li><a href=\"#\">Home</a></li>\r\n            ");
  stack1 = helpers['if'].call(depth0, "user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </ul>\r\n        <ul class=\"right\">\r\n            ");
  stack1 = helpers['if'].call(depth0, "user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  stack1 = helpers['if'].call(depth0, "user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </ul>\r\n\r\n    </section>\r\n</nav>\r\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>Welcome</h1>\r\n");
  
});

Ember.TEMPLATES["inventories/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                    <tr>\r\n                        <td>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "inventories.inventory", "", options) : helperMissing.call(depth0, "link-to", "inventories.inventory", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "settings.sequences.sequence", "sequence", options) : helperMissing.call(depth0, "link-to", "settings.sequences.sequence", "sequence", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "settings.sequences.sequence.edit_sequence", "sequence", options) : helperMissing.call(depth0, "link-to", "settings.sequences.sequence.edit_sequence", "sequence", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                        <td>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "inventories.inventory.edit_inventory", "", options) : helperMissing.call(depth0, "link-to", "inventories.inventory.edit_inventory", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\r\n                    </tr>\r\n                    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "number", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program4(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "sequence.code", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program6(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "sequence.descriptions", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program8(depth0,data) {
  
  
  data.buffer.push("edit");
  }

  data.buffer.push("\r\n<div class=\"panel\">\r\n    <form>\r\n        <div class=\"row\">\r\n            <div class=\"large-4 columns\">\r\n                <label>\r\n                    Sequence\r\n                    <select>\r\n                        <option value=\"husker\">Husker</option>\r\n                        <option value=\"starbuck\">Starbuck</option>\r\n                        <option value=\"hotdog\">Hot Dog</option>\r\n                        <option value=\"apollo\">Apollo</option>\r\n                    </select>\r\n                </label>\r\n            </div>\r\n            <div class=\"large-4 columns\">\r\n                <label>\r\n                    Warehouse\r\n                    <select>\r\n                        <option value=\"husker\">Husker</option>\r\n                        <option value=\"starbuck\">Starbuck</option>\r\n                        <option value=\"hotdog\">Hot Dog</option>\r\n                        <option value=\"apollo\">Apollo</option>\r\n                    </select>\r\n                </label>\r\n            </div>\r\n            <div class=\"large-4 columns\">\r\n                <label>\r\n                    Group\r\n                    <select>\r\n                        <option value=\"husker\">Husker</option>\r\n                        <option value=\"starbuck\">Starbuck</option>\r\n                        <option value=\"hotdog\">Hot Dog</option>\r\n                        <option value=\"apollo\">Apollo</option>\r\n                    </select>\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n            <div class=\"large-4 columns\">\r\n                <label>\r\n                    Number\r\n                    <input type=\"text\" placeholder=\"enter your search pattern here\" />\r\n                </label>\r\n            </div>\r\n            <div class=\"large-4 columns\">\r\n                <label>\r\n                    Status\r\n                    <select>\r\n                        <option value=\"husker\">Husker</option>\r\n                        <option value=\"starbuck\">Starbuck</option>\r\n                        <option value=\"hotdog\">Hot Dog</option>\r\n                        <option value=\"apollo\">Apollo</option>\r\n                    </select>\r\n                </label>\r\n            </div>\r\n            <div class=\"large-4 columns\">\r\n                <label>\r\n                    <!--<div class=\"clearfix\" style=\"background-color:aqua\">-->\r\n                    <a role=\"button\" aria-label=\"submit form\" href=\"#\" class=\"button right tiny\" style=\"margin-top:0.5rem\">Default</a>\r\n                    <!--</div>-->\r\n                </label>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"row\">\r\n        <div class=\"large-12 columns\">\r\n            <table>\r\n                <thead>\r\n                    <tr>\r\n                        <th>Number</th>\r\n                        <th>Sequence</th>\r\n                        <th>Table Header</th>\r\n                        <th>Edit</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["inventories/inventory"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Back");
  }

  data.buffer.push("<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <div class=\"well\">\r\n            <p class=\"text-centered\">\r\n            </p>\r\n            <h4></h4>\r\n            <div class=\"row\">\r\n                <div class=\"row\">\r\n                    <div class=\"large-4 columns\">\r\n                        <label>\r\n                            Sequence\r\n                            <select>\r\n                                <option value=\"1\">InventoryList 1</option>\r\n                                <option value=\"2\">InventoryList 2</option>\r\n                                <option value=\"3\">InventoryList 3</option>\r\n                            </select>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"large-4 columns\">\r\n                        <label>\r\n                            Date Created\r\n                            <input type=\"text\" disabled  value=\"20/11/2014\"/>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"large-4 columns\">\r\n                        <label>\r\n                            Created By\r\n                            <input type=\"text\" disabled value=\"Rudy\" />\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <p>\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "inventories", options) : helperMissing.call(depth0, "link-to", "inventories", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["inventories/inventory/edit_inventory"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("dit is de edit inventory");
  
});

Ember.TEMPLATES["inventories/inventory/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("index inventory");
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<form action=\"enter\" method='POST'>\r\n    <fieldset>\r\n        <legend>Login</legend>\r\n        <input type=\"email\" name=\"email\" placeholder=\"Email\" value=email />\r\n        <input type=\"password\" name=\"password\" placeholder=\"Password\" value=password />\r\n        <button class=\"small\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Enter</button>\r\n    </fieldset>\r\n</form>");
  return buffer;
  
});

Ember.TEMPLATES["products/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"panel\">\r\n    <form>\r\n        <div class=\"row\">\r\n            <div class=\"large-4 columns\">\r\n                <label>\r\n                    Number\r\n                    <input type=\"text\" placeholder=\"enter your search pattern here\" />\r\n                </label>\r\n            </div>\r\n            <div class=\"large-4 columns\">\r\n                <label>\r\n                    Warehouse\r\n                    <select>\r\n                        <option value=\"husker\">Rumst</option>\r\n                        <option value=\"starbuck\">Mechelen</option>\r\n                        <option value=\"hotdog\">Hasselt</option>\r\n                    </select>\r\n                </label>\r\n            </div>\r\n            <div class=\"large-4 columns\">\r\n               \r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n            <div class=\"large-4 columns\">\r\n                <label>\r\n                    Description\r\n                    <input type=\"text\" placeholder=\"enter your search pattern here\" />\r\n                </label>\r\n            </div>\r\n            <div class=\"large-4 columns\">\r\n            </div>\r\n            <div class=\"large-4 columns\">\r\n                <label>\r\n                    <!--<div class=\"clearfix\" style=\"background-color:aqua\">-->\r\n                    <a role=\"button\" aria-label=\"submit form\" href=\"#\" class=\"button right\" style=\"margin-top:0.5rem\">Default</a>\r\n                    <!--</div>-->\r\n                </label>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"row\">\r\n        <div class=\"large-12 columns\">\r\n            <table>\r\n                <thead>\r\n                    <tr>\r\n                        <th>Number</th>\r\n                        <th>Description</th>\r\n                        <th>Warehouse</th>\r\n                        <th>Stock</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>Content Goes Here</td>\r\n                        <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>\r\n                        <td>Content Goes Here</td>\r\n                        <td>Content Goes Here</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Content Goes Here</td>\r\n                        <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>\r\n                        <td>Content Goes Here</td>\r\n                        <td>Content Goes Here</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Content Goes Here</td>\r\n                        <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>\r\n                        <td>Content Goes Here</td>\r\n                        <td>Content Goes Here</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>");
  
});

Ember.TEMPLATES["settings/detailStatusses/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Back");
  }

  data.buffer.push("<h1>detailStatusses</h1>\r\n<hr />\r\n ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings", options) : helperMissing.call(depth0, "link-to", "settings", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["settings/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Sequences");
  }

  data.buffer.push("<h1>Settings</h1>\r\n<hr />\r\n<ol class=\"breadcrumbs\">\r\n    <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings.sequences", options) : helperMissing.call(depth0, "link-to", "settings.sequences", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n</ol>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["settings/sequences/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("edit");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Back");
  }

  data.buffer.push("<h1>sequences</h1>\r\n<hr />\r\n\r\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings.sequences.sequence", options) : helperMissing.call(depth0, "link-to", "settings.sequences.sequence", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings", options) : helperMissing.call(depth0, "link-to", "settings", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["settings/sequences/sequence"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Back");
  }

  data.buffer.push("<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <div class=\"well\">\r\n            <p class=\"text-centered\">\r\n            </p>\r\n            <h4></h4>\r\n            <table>\r\n                <tr><td>Code:</td><td></td></tr>\r\n                <tr><td>Description:</td><td></td></tr>                \r\n            </table>\r\n            <p>\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings.sequences", options) : helperMissing.call(depth0, "link-to", "settings.sequences", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["settings/sequences/sequence/edit_sequence"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h3>Edit Sequence</h3>\r\n");
  
});

Ember.TEMPLATES["settings/sequences/sequence/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Edit Basic Info");
  }

  data.buffer.push("ppp\r\n\r\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings.sequences.sequence.edit_sequence", options) : helperMissing.call(depth0, "link-to", "settings.sequences.sequence.edit_sequence", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["settings/statusses/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Back");
  }

  data.buffer.push("<h1>statusses</h1>\r\n<hr />\r\n ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings", options) : helperMissing.call(depth0, "link-to", "settings", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});
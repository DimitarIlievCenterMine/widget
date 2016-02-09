var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['foo.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "Foo Bar";
},"useData":true});
templates['index.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "The Mitko";
},"useData":true});

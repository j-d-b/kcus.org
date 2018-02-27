(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"col-lg mw-450 mx-auto\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg pb-2 pb-lg-0\">\n        <a href=\""
    + alias4(((helper = (helper = helpers.hash || (depth0 != null ? depth0.hash : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hash","hash":{},"data":data}) : helper)))
    + "\">\n          <img class=\"img-thumbnail\" src=\""
    + alias4(((helper = (helper = helpers["img-src"] || (depth0 != null ? depth0["img-src"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img-src","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers["img-name"] || (depth0 != null ? depth0["img-name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img-name","hash":{},"data":data}) : helper)))
    + "\">\n        </a>\n      </div>\n      <div class=\"col-lg pl-lg-0 pb-4 pb-lg-0\">\n        "
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n  </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.infos : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['projects'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"col-md-6 col-lg-4 pb-3 pb-md-4-5\">\n    <div class=\"card h-100\">\n      <a href=\""
    + alias4(((helper = (helper = helpers.hash || (depth0 != null ? depth0.hash : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hash","hash":{},"data":data}) : helper)))
    + "\">\n        <img class=\"card-img-top\" src=\""
    + alias4(((helper = (helper = helpers["img-src"] || (depth0 != null ? depth0["img-src"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img-src","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n      </a>\n      <div class=\"card-body text-roboto\">\n        <a href=\""
    + alias4(((helper = (helper = helpers.hash || (depth0 != null ? depth0.hash : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hash","hash":{},"data":data}) : helper)))
    + "\">\n          <span class=\"blue-header\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n        </a>\n        <p class=\"card-text project-text\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n      </div>\n      <div class=\"card-footer\">\n        <div class=\"row gray-subheader\">\n          <div class=\"col-7\">"
    + alias4(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data}) : helper)))
    + "</div>\n          <div class=\"col-5 text-right\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</div>\n        </div>\n      </div>\n    </div>\n  </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.projects : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['staff'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"staff-item col-md-6 col-lg-4 pb-2 pb-md-3\">\n    <a class=\"staff-select\" data-target=\""
    + alias4(((helper = (helper = helpers["staff-name-first"] || (depth0 != null ? depth0["staff-name-first"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"staff-name-first","hash":{},"data":data}) : helper)))
    + "\">\n      <img class=\"img-thumbnail\" src=\"images/staff/"
    + alias4(((helper = (helper = helpers["staff-name-first"] || (depth0 != null ? depth0["staff-name-first"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"staff-name-first","hash":{},"data":data}) : helper)))
    + "-2x1-thumb.png\" alt=\""
    + alias4(((helper = (helper = helpers["staff-name-first"] || (depth0 != null ? depth0["staff-name-first"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"staff-name-first","hash":{},"data":data}) : helper)))
    + "\">\n    </a>\n    <div class=\"pt-1 pl-1\">\n      <div class=\"blue-header\">\n        <a class=\"staff-select\" data-target=\""
    + alias4(((helper = (helper = helpers["staff-name-first"] || (depth0 != null ? depth0["staff-name-first"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"staff-name-first","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers["staff-name-full"] || (depth0 != null ? depth0["staff-name-full"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"staff-name-full","hash":{},"data":data}) : helper)))
    + "</a>\n      </div>\n      <div class=\"gray-subheader text-uppercase\">\n        "
    + alias4(((helper = (helper = helpers["staff-title"] || (depth0 != null ? depth0["staff-title"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"staff-title","hash":{},"data":data}) : helper)))
    + "\n      </div>\n    </div>\n  </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.staff : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();
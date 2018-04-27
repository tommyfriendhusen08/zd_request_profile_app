(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['error_template'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<p>"
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.statusText || (depth0 != null ? depth0.statusText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"statusText","hash":{},"data":data}) : helper)))
    + " error. Please report a bug at the link below.</p>";
},"useData":true});
templates['full_contact_template'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.photo : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n<table>\n    <tr>\n        <td>Name:</td>\n        <td class=\"data\">"
    + container.escapeExpression(((helper = (helper = helpers.fullName || (depth0 != null ? depth0.fullName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"fullName","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n    <tr>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.ageRange : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tr>\n    <tr>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.gender : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tr>\n    <tr>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.location : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tr>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.organizationTitle : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.organizationTitle : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</table>\n<div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.facebook : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.twitter : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.linkedin : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.google : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<hr>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class='thumbnail'>"
    + ((stack1 = (helpers.link_image || (depth0 && depth0.link_image) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.photo : depth0),{"name":"link_image","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <td>Age Range:</td>\n        <td class=\"data\">"
    + container.escapeExpression(((helper = (helper = helpers.ageRange || (depth0 != null ? depth0.ageRange : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ageRange","hash":{},"data":data}) : helper)))
    + "</td>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <td>Gender:</td>\n        <td class=\"data\">"
    + container.escapeExpression(((helper = (helper = helpers.gender || (depth0 != null ? depth0.gender : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"gender","hash":{},"data":data}) : helper)))
    + "</td>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <td>Location:</td>\n        <td class=\"data\">"
    + container.escapeExpression(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"location","hash":{},"data":data}) : helper)))
    + "</td>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <tr>\n        <td>Organization:</td>\n        <td class=\"data\">"
    + container.escapeExpression(((helper = (helper = helpers.organization || (depth0 != null ? depth0.organization : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"organization","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n    ";
},"14":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\n    <tr>\n        <td>Title:</td>\n        <td class=\"data\">"
    + container.escapeExpression(((helper = (helper = helpers.organizationTitle || (depth0 != null ? depth0.organizationTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"organizationTitle","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "    <span class=\"social-link\">\n      "
    + container.escapeExpression((helpers.link_social || (depth0 && depth0.link_social) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.facebook : depth0),{"name":"link_social","hash":{},"data":data}))
    + "\n    </span> \n";
},"18":function(container,depth0,helpers,partials,data) {
    return "    <span class=\"social-link\">\n      "
    + container.escapeExpression((helpers.link_social || (depth0 && depth0.link_social) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.twitter : depth0),{"name":"link_social","hash":{},"data":data}))
    + "\n    </span> \n";
},"20":function(container,depth0,helpers,partials,data) {
    return "    <span class=\"social-link\">\n      "
    + container.escapeExpression((helpers.link_social || (depth0 && depth0.link_social) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.linkedin : depth0),{"name":"link_social","hash":{},"data":data}))
    + "\n    </span> \n";
},"22":function(container,depth0,helpers,partials,data) {
    return "    <span class=\"social-link\">\n      "
    + container.escapeExpression((helpers.link_social || (depth0 && depth0.link_social) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.google : depth0),{"name":"link_social","hash":{},"data":data}))
    + " \n    </span> \n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.message : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
templates['requester_template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h4>"
    + container.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"message","hash":{},"data":data}) : helper)))
    + "</h4>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<table>\n    <tr>\n        <td>IH Name:</td>\n        <td class=\"data\">"
    + alias4(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n    <tr>\n        <td>IH Email:</td>\n        <td class=\"data\">"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n    <tr>\n        <td>Role:</td>\n        <td class=\"data\">"
    + alias4(((helper = (helper = helpers.role || (depth0 != null ? depth0.role : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"role","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n    <tr>\n        <td>Repeat Guest:</td>\n        <td class=\"data\">"
    + alias4(((helper = (helper = helpers.repeat || (depth0 != null ? depth0.repeat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"repeat","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n    <tr>\n        <td>Had Problems:</td>\n        <td class=\"data\">"
    + alias4(((helper = (helper = helpers.had_problems || (depth0 != null ? depth0.had_problems : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"had_problems","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n    <tr>\n        <td>Caused Problems:</td>\n        <td class=\"data\">"
    + alias4(((helper = (helper = helpers.caused_problems || (depth0 != null ? depth0.caused_problems : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caused_problems","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n</table>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.notes : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.reservations : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.units : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<br>\n<h4 class=\"expand\">+ User-Notes</h4>\n<div class=\"hidden\">\n\n    <table>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.notes : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </table>\n</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        <tr>\n            <td>\n                "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\n            </td>\n        </tr>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<br>\n<h4 class=\"expand\">+ Reservations</h4>\n<div class='hidden'>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.reservations : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "    <div>\n        <table>\n            <tr>\n                <td>ID:</td>\n                <td>"
    + ((stack1 = (helpers.link_reservation || (depth0 && depth0.link_reservation) || helpers.helperMissing).call(alias1,depth0,{"name":"link_reservation","hash":{},"data":data})) != null ? stack1 : "")
    + "</td>\n            </tr>\n            <tr>\n                <td>Status:</td>\n                <td>"
    + alias3(alias2((depth0 != null ? depth0.status : depth0), depth0))
    + "</td>\n            </tr>\n            <tr>\n                <td>Stay Reason:</td>\n                <td>"
    + alias3(alias2((depth0 != null ? depth0.reason : depth0), depth0))
    + "</td>\n            </tr>\n            <tr>\n                <td>Start Date:</td>\n                <td>"
    + alias3(alias2((depth0 != null ? depth0.start : depth0), depth0))
    + "</td>\n            </tr>\n            <tr>\n                <td>End Date:</td>\n                <td>"
    + alias3(alias2((depth0 != null ? depth0.end : depth0), depth0))
    + "</td>\n            </tr>\n        </table>\n        <div class='indent'>\n            <h5 class=\"expand\">+ Notes</h5>\n            <ul class='hidden'>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.notes : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </ul>\n            <h5 class=\"expand\">+ Services</h5>\n            <ul class='hidden'>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.services : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </ul>\n        </div>\n    </div>\n    <hr> ";
},"9":function(container,depth0,helpers,partials,data) {
    return "                <li>\n                    "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\n                </li>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <li>\n                    "
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + ": "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + " - "
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "\n                </li>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<h4 class=\"expand\">+ Units</h4>\n<div class=\"hidden\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.units : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "    <table>\n        <tr>\n            <td>ID:</td>\n            <td>"
    + ((stack1 = (helpers.link_unit || (depth0 && depth0.link_unit) || helpers.helperMissing).call(alias1,depth0,{"name":"link_unit","hash":{},"data":data})) != null ? stack1 : "")
    + "</td>\n        </tr>\n        <tr>\n            <td>Name:</td>\n            <td>"
    + alias3(alias2((depth0 != null ? depth0.unit_name : depth0), depth0))
    + "</td>\n        </tr>\n        <tr>\n            <td>IH Start Date:</td>\n            <td>"
    + alias3(alias2((depth0 != null ? depth0.start_date : depth0), depth0))
    + "</td>\n        </tr>\n        <tr>\n            <td>Booked Revenue:</td>\n            <td>$"
    + alias3(alias2((depth0 != null ? depth0.booked_revenue : depth0), depth0))
    + "</td>\n        </tr>\n        <tr>\n            <td>Paid Revenue:</td>\n            <td>$"
    + alias3(alias2((depth0 != null ? depth0.actual_revenue : depth0), depth0))
    + "</td>\n        </tr>\n    </table>\n    <div class='indent'>\n        <h5 class=\"expand\">+ Upcoming-Reservations</h5>\n        <ul class='hidden'>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.upcoming_reservations : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n        <h5 class=\"expand\">+ Completed-Reservations</h5>\n        <ul class='hidden'>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.completed_reservations : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n        <h5 class=\"expand\">+ Future-Services</h5>\n        <ul class='hidden'>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.future_work_orders : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n    <hr>";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "            <li>\n                "
    + ((stack1 = (helpers.link_reservation || (depth0 && depth0.link_reservation) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"link_reservation","hash":{},"data":data})) != null ? stack1 : "")
    + ": "
    + alias2(alias1((depth0 != null ? depth0.start_date : depth0), depth0))
    + " - "
    + alias2(alias1((depth0 != null ? depth0.end_date : depth0), depth0))
    + "\n            </li>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <li>\n                "
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + ": "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + " - "
    + alias2(alias1((depth0 != null ? depth0.due_date : depth0), depth0))
    + "\n            </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.message : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
})();
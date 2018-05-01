const RESERVATIONS_URL = BASE_URL + "manage/reservations/";
const UNITS_URL = BASE_URL + "manage/units/";
const USERS_URL = BASE_URL + "manage/users/";

Handlebars.registerHelper('link_reservation', function(object) {
    var url = Handlebars.escapeExpression(RESERVATIONS_URL + object.id),
        text = Handlebars.escapeExpression(object.id);

    return new Handlebars.SafeString(
        "<a href='" + url + "' target='_blank'>" + text + "</a>"
    );
});

Handlebars.registerHelper('link_wiki', function(object) {
    var url = Handlebars.escapeExpression(object.wiki_link),
        text = Handlebars.escapeExpression(object.units);

    return new Handlebars.SafeString(
        "<a href='" + url + "' target='_blank'>" + text + "</a>"
    );

});

Handlebars.registerHelper('link_unit', function(object) {
    var url = Handlebars.escapeExpression(UNITS_URL + object.unit_id + "/edit"),
        text = Handlebars.escapeExpression(object.unit_id);

    return new Handlebars.SafeString(
        "<a href='" + url + "' target='_blank'>" + text + "</a>"
    );
});

Handlebars.registerHelper('link_person', function(object) {
    var url = Handlebars.escapeExpression(USERS_URL + object.id + "/edit"),
        text = Handlebars.escapeExpression(object.first_name + " " + object.last_name);

    return new Handlebars.SafeString(
        "<a href='" + url + "' target='_blank'>" + text + "</a>"
    );
});

Handlebars.registerHelper('link_image', function(url) {
    var image = Handlebars.escapeExpression(url);

    return new Handlebars.SafeString(
        "<img src='" + image + "'>"
    );
});

Handlebars.registerHelper('link_social', function(url) {
    var link = Handlebars.escapeExpression(url),
        icon = setIcon(url);

    return new Handlebars.SafeString(
        "<a href='" + link + "' target='_blank'>" + icon + "</a>"
    );
});

Handlebars.registerHelper('length', function(object) {
    return new Handlebars.SafeString(object.length);
});

function setIcon(url) {
    if (url.search('google') != -1) {
        return '<i class="fa fa-google"></i>';
    } else if (url.search('twitter') != -1) {
        return '<i class="fa fa-twitter"></i>';
    } else if (url.search('linkedin') != -1) {
        return '<i class="fa fa-linkedin"></i>';
    } else if (url.search('facebook') != -1) {
        return '<i class="fa fa-facebook"></i>';
    }
}
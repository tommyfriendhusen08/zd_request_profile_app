function showInfo(data) {
    var requester_data;
    if (data.error_message) {
        requester_data = { 'message': data.error_message }

    } else {
        requester_data = {
            'first_name': data.user.first_name,
            'last_name': data.user.last_name,
            'email': data.user.email,
            'repeat': data.repeat,
            'had_problems': data.user.had_problem,
            'caused_problems': data.user.caused_problem,
            'notes': data.user_notes,
            'role': data.title,
            'reservations': data.reservations,
            'units': data.units,
            'baseUrl': RESERVATIONS_URL
        };

    }

    var requesterSource = $("#requester-template").html();
    var requesterTemplate = Handlebars.compile(requesterSource);
    var requesterHtml = requesterTemplate(requester_data);
    $("#content").append(requesterHtml);

    var fc_data;
    if (data.fcs_error) {
        fc_data = { 'message': data.fcs_error }
    } else {

        fc_data = {
            'photo': data.fullContactUser.photo,
            'fullName': data.fullContactUser.fullName,
            'ageRange': data.fullContactUser.ageRange,
            'gender': data.fullContactUser.gender,
            'location': data.fullContactUser.location,
            'organization': data.fullContactUser.organization,
            'organizationTitle': data.fullContactUser.organizationTitle,
            'twitter': data.fullContactUser.twitter,
            'facebook': data.fullContactUser.facebook,
            'linkedin': data.fullContactUser.linkedin,
            'google': data.fullContactUser.google,
        };
    }

    var fullContactSource = $("#full-contact-template").html();
    var fullContactTemplate = Handlebars.compile(fullContactSource);
    var fullContactHtml = fullContactTemplate(fc_data);
    $("#content").prepend(fullContactHtml);

}

function showError(response) {
    var error_data = {
        'status': response.status,
        'statusText': response.statusText
    };
    var source = $("#error-template").html();
    var template = Handlebars.compile(source);
    var html = template(error_data);
    $("#error-content").html(html);
}
const IH_REQUESTERS_API = BASE_URL + "api/zendesk/requesters/";

class IHRequest {
    constructor(ticket, groups, api_key) {
        this.ticket = ticket.ticket;
        this.groups = groups['currentUser.groups'].map(function(obj) { return obj.name; });
        this.api_key = api_key;
    }

    requestIHInfo() {
        $.ajax(this.settings).then(
            function(data) {
                showInfo(data);
            },
            function(response) {
                showError(response);
            }
        );
    }
    buildAjaxCall() {

        var requester = this.ticket.requester;
        var api_key = this.api_key;
        this.settings = {
            url: IH_REQUESTERS_API + requester.id,
            data: requester,
            type: 'GET',
            dataType: 'json',
            headers: { 'Authorization': api_key }
        };
    }

    static generateRequest() {
        if (this.canRequest()) {
            const requester = new IHRequest(this.requestObject.ticket, this.requestObject.groups, this.api_key);
            requester.buildAjaxCall();
            requester.requestIHInfo();
            this.clearRequest();
        }
    }

    static canRequest() {
        return 'undefined' != this.requestObject.ticket && 'undefined' != this.requestObject.groups;
    }

    static setTicket(ticket) {
        this.requestObject.ticket = ticket;
    }

    static setGroups(groups) {
        this.requestObject.groups = groups;
    }

    static setApiKey(metadata) {
        this.api_key = metadata.settings.api_key;
    }
    static clearRequest() {
        this.requestObject = {};
    }

}
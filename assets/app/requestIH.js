const IH_REQUESTERS_API = BASE_URL + "api/zendesk/requesters/";
const API_KEY = "470bee42acb39b950fdea4f7258502";

class IHRequest {
    constructor(ticket, groups) {
        this.ticket = ticket.ticket;
        this.groups = groups['currentUser.groups'].map(function(obj) { return obj.name; });
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
        this.settings = {
            url: IH_REQUESTERS_API + requester.id,
            data: requester,
            type: 'GET',
            dataType: 'json',
            headers: { 'Authorization': API_KEY }
        };
    }

    static handleRequest() {
        if (this.canRequest()) {
            const requester = new IHRequest(this.requestObject.ticket, this.requestObject.groups);
            requester.buildAjaxCall();
            requester.requestIHInfo();
            this.clearRequest();
        }
    }

    static canRequest() {
        return 'undefined' != this.requestObject.ticket && 'undefined' != this.requestObject.groups;
    }

    static setTicket(ticket) {
        this.prepareRequestObject
        this.requestObject.ticket = ticket
        this.handleRequest()
    }

    static setGroups(groups) {
        this.prepareRequestObject
        this.requestObject.groups = groups
        this.handleRequest()
    }

    static prepareRequestObject() {
        if(typeof this.requestObject == 'undefined'){
            this.requestObject = {}
        }
    }

    static clearRequest() {
        this.requestObject = {};
    }
}
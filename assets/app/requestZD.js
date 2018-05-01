function requestInfo(client) {
    var groupsPromise = client.get('currentUser.groups');
    var ticketPromise = client.get('ticket');
    var settingsPromise = client.metadata();
    Promise.all([groupsPromise, ticketPromise, settingsPromise]).then(function(values) {
        IHRequest.clearRequest();
        IHRequest.setGroups(values[0]);
        IHRequest.setTicket(values[1]);
        IHRequest.setApiKey(values[2]);
        IHRequest.generateRequest();
    });
}
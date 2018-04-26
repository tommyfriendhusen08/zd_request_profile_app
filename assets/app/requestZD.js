function requestInfo(client) {
    var groupsPromise = client.get('currentUser.groups');
    var ticketPromise = client.get('ticket');
    Promise.all([groupsPromise, ticketPromise]).then(function(values) {
        IHRequest.clearRequest();
        IHRequest.setGroups(values[0]);
        IHRequest.setTicket(values[1]);
        IHRequest.generateRequest();
    });
}
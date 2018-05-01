function requestInfo(client) {
    var groupsPromise = client.get('currentUser.groups');
    var ticketPromise = client.get('ticket');
    groupsPromise.then(function(groups){ IHRequest.setGroups(groups) })
    ticketPromise.then(function(ticket){ IHRequest.setTicket(ticket) })
}
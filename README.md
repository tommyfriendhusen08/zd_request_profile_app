# IH Request Profile Zendesk Application

The purpose of this application is to deliver customer record information to the ticket view of the InvitedHome zendesk portal. If a Vacation Consultant or HEX/GEX team memeber is looking at a ticket or fielding a call this application will draw as much information as possible from the zendesk API and make a request to the InvitedHome backend to return information on the guest themselves as well as reservation information(in the case of guests) or homeowner information(in the case of owners). 

Additionally the associated IH backend will make an API call to Full Contact to gain more demographic information and photos of a users, ideally in the case that the user has no invited home user profile. 

The app will then display all the serialized information on the right hand ticket display with helpful links to any IH or relevant external resources.

This application was developed with the ZAT gem tool set and includes the jquery, bootstrap and the handlebars libraries.


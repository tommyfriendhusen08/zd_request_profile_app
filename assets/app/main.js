const BASE_URL = "http://localhost:3000/";
const FULL_CONTACT_API_KEY = "mOEHe2wFoNepQnpPY9LCtqXdDcbfuuqP"

requirejs([
    'app/handlebars_extensions',
    'app/writer',
    'app/requestZD',
    'app/requestIH',
    'app/listeners',
], function() {

    $(function() {
        var client = ZAFClient.init();
        client.invoke('resize', { width: '100%', height: '500px' });
        run(client);
    });

    function run(client) {
        requestInfo(client);
        setListeners();
    }
})
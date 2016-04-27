angular.module('main.models', ['ngResource'])

.constant("server_config",{url : "https://galadriel.ired.unam.mx:8100", key : "84656ca7c7ccc6b44523a18b6bdf94140220bfc8"})

.factory('events', function($resource, server_config) {
	return $resource(server_config.url + '/event/:id', { account_key : server_config.key, id : '@_id' },
    {
        'update': { method:'PUT' }
    });
})

.factory('speakers', function($resource, server_config) {
	return $resource(server_config.url + '/speakers/:id', { account_key : server_config.key, id : '@_id' },
    {
        'update': { method:'PUT' }
    });
})

.factory('credits', function($resource, server_config) {
	return $resource(server_config.url + '/credits/:id', { account_key : server_config.key, id : '@_id' },
    {
        'update': { method:'PUT' }
    });
})

.factory('line', function($resource, server_config) {
	return $resource(server_config.url + '/line/:id/:reference', { account_key : server_config.key, id : '@_id' },
    {
        'update': { method:'PUT' }
    });
})

.factory('login', function($resource, server_config) {
	return $resource(server_config.url + '/login/:id/:password', { account_key : server_config.key, id : '@_id' },
    {
        'update': { method:'PUT' }
    });
})

.factory('accounts', function($resource, server_config) {
	return $resource(server_config.url + '/accounts/:id', { account_key : server_config.key, id : '@_id' },
    {
        'update': { method:'PUT' }
    });
});
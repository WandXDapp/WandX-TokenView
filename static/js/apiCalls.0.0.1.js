
app.service('apiCalls', function($http, $q) {	

	/**********************
		Token Info
	**********************/

	this.getTotalSupply = function(address){
		var deferred = $q.defer();

		var url = 'https://api.ethplorer.io/getTokenInfo/' + address + '?apiKey=freekey';
		
		$http({
				method: "GET",
				url: url
			})
			.then(
				function (response) {
					deferred.resolve(response.data);
				},
				function(errResponse){
					deferred.reject(errResponse);
				}
			);

		return deferred.promise;
	}

});
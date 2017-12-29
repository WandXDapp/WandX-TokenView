
app.controller('indexController', function companyController($scope, indexService){

	$scope.tokens = Tokens();

	$scope.tokenSearch = '';

	$scope.selectedToken = $scope.tokens[0];
	$scope.tokenInfo = TokenInfo();

	$scope.firstLoad = false;

	$scope.getTokenData = function(){
		
		indexService.getTotalSupply($scope.selectedToken.address).then(function(data){
			$scope.tokenInfo = CreateTokenInfo(data);
		});

		$("div").removeClass("show");
		$('#feeds_' + $scope.selectedToken.short).addClass("show");
	}

	$scope.showFirst = function(){
		$('#feeds_' + $scope.selectedToken.short).addClass("show");
		$('#rate_' + $scope.selectedToken.short).addClass("show");
	}

	$scope.getTokenData();

	$scope.tokenSelector = function(){
		var ret = $scope.tokenSearch;
		var isValObj = false;
		if($scope.tokenSearch){
			if($scope.tokenSearch.hasOwnProperty("name")){
				isValObj = true;
			}
			else {
				$.each($scope.tokens, function(i, key){
					if(key.name.toLowerCase() === $scope.tokenSearch.toLowerCase() || 
						key.short.toLowerCase() === $scope.tokenSearch.toLowerCase()){
						$scope.tokenSearch = key;
						isValObj = true;
						return false;
					}
				});
			}
		}

		if(isValObj === true){
			$scope.selectedToken = $scope.tokenSearch;
			$scope.tokenInfo = TokenInfo();
			$scope.getTokenData();
		}
	};

});
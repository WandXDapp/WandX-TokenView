var app = angular.module('tokenview', ['mgcrea.ngStrap'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[{');
    $interpolateProvider.endSymbol('}]');
});

// app.run(function($http) {
//   $http.defaults.headers.post['X-CSRFToken'] = csrftoken;
// });

app.run(function($rootScope) {
    $rootScope.$on("emitBroadcast", function(event, args) {
    	$rootScope.$broadcast(args.handle, args);
    });
});

app.directive('ngConfirmClick', [function(){
	return {
		link: function (scope, element, attr) {
			var msg = attr.ngConfirmClick || "Are you sure?";
			var clickAction = attr.confirmedClick;
			element.bind('click',function (event) {
				if ( window.confirm(msg) ) {
					scope.$eval(clickAction)
				}
			});
		}
	};
}])

var etherscanapikey = 'C639B3GZN7JQ84YFFCFUF5MZUWSI3BZXZ7';

function Tokens() {
	var tokens = [
		{'name': 'EOS','short': 'EOS', 'address': '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0'},
		{'name': 'Qtum', 'short': 'QTM', 'address': '0x9a642d6b3368ddc662CA244bAdf32cDA716005BC'},
		{'name': 'OmiseGO', 'short': 'OMG', 'address': '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07'},
		{'name': 'Augur', 'short': 'REP', 'address': '0xe94327d07fc17907b4db788e5adf2ed424addff6'},
		{'name': 'Golem', 'short': 'GNT', 'address': '0xa74476443119A942dE498590Fe1f2454d7D4aC0d'},
		{'name': 'Status Network', 'short': 'SNT', 'address': '0x744d70fdbe2ba4cf95131626614a1763df805b9e'},
		{'name': 'TenXPay', 'short': 'TENX', 'address': '0xB97048628DB6B661D4C2aA833e95Dbe1A905B280'},
		{'name': 'Basic Attention Token', 'short': 'BAT', 'address': '0x0d8775f648430679a709e98d2b0cb6250d2887ef'},
		{'name': 'Santiment', 'short': 'SAN', 'address': '0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098'},
		{'name': 'Digix Global', 'short': 'DGD', 'address': '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a'},
		{'name': 'Kyber Network Crystal', 'short': 'KNC', 'address': '0xdd974d5c2e2928dea5f71b9825b8b646686bd200'},
		{'name': 'Civic', 'short': 'CVC', 'address': '0x41e5560054824ea6b0732e656e3ad64e20e94e45'},
		{'name': '0xProject', 'short': 'ZRX', 'address': '0xe41d2489571d322189246dafa5ebde1f4699f498'},
		{'name': 'Iconomi', 'short': 'ICN', 'address': '0x888666CA69E0f178DED6D75b5726Cee99A87D698'},
		{'name': 'FunFair', 'short': 'FUN', 'address': '0x419d0d8bdd9af5e606ae2232ed285aff190e711b'},
		{'name': 'Gnosis', 'short': 'GNO', 'address': '0x6810e776880c02933d47db1b9fc05908e5386b96'},
		{'name': 'Monaco', 'short': 'MCO', 'address': '0xb63b606ac810a52cca15e44bb630fd42d8d1d83d'},
		{'name': 'Decentraland', 'short': 'DNT', 'address': '0x0f5d2fb29fb7d3cfee444a200298f468908cc942'},
		{'name': 'Bancor Network', 'short': 'BNT', 'address': '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c'},
		{'name': 'Ethos', 'short': 'ETHOS', 'address': '0x5af2be193a6abca9c8817001f45744777db30756'},
		{'name': 'Wand Token', 'short': 'WAND', 'address': '0x27f610bf36eca0939093343ac28b1534a721dbb4'},
		{'name': 'Bounty0x Token', 'short': 'BNTY', 'address': '0xd2d6158683aee4cc838067727209a0aaf4359de3'},
		{'name': 'FidentiaX', 'short': 'FDX', 'address': '0x52a7cb918c11a16958be40cba7e31e32a499a465'},
		{'name': 'Wings', 'short': 'WINGS', 'address': '0x667088b212ce3d06a1b553a7221E1fD19000d9aF'},
		{'name': 'Metal', 'short': 'MTL', 'address': '0x667088b212ce3d06a1b553a7221E1fD19000d9aF'}
	];

	$.each(tokens, function(i, key){
		key.displayName = key.name + " (" + key.short + ")";
	});

	return tokens;
}


function TokenInfo(){
	var tokenInfo = {
		address: '',
		name: '',
		decimals: 0,
		symbol: '',
		totalSupply: 0,
		totalSupplyInWords: '',
		owner: '',
		transfersCount: 0,
		lastUpdated: '',
		totalIn: 0,
		totalInWords: '',
		totalOut: 0,
		totalOutWords: '',
		issuancesCount: 0,
		holdersCount: 0,
		price: {
			rate: 0,
			diff: 0,
			diff7d: 0,
			ts: 0,
			marketCapUsd: 0,
			availableSupply: 0,
			volume24h: 0,
			currency: ''
		},
		countOps: 0
	};
	return tokenInfo;
}

function CreateTokenInfo(data){
	var tokenInfo = TokenInfo();

	tokenInfo.address = data.address;
	tokenInfo.name = data.name;
	tokenInfo.decimals = data.decimals;
	tokenInfo.symbol = data.symbol;
	tokenInfo.totalSupply = data.totalSupply;
	tokenInfo.owner = data.owner;
	tokenInfo.transfersCount = data.transfersCount;
	tokenInfo.lastUpdated = data.lastUpdated;
	tokenInfo.totalIn = data.totalIn;
	tokenInfo.totalOut = data.totalOut;
	tokenInfo.issuancesCount = data.issuancesCount;
	tokenInfo.holdersCount = data.holdersCount;
	tokenInfo.price.rate = data.price.rate;
	tokenInfo.price.diff = data.price.diff;
	tokenInfo.price.diff7d = data.price.diff7d;
	tokenInfo.price.ts = data.price.ts;
	tokenInfo.price.marketCapUsd = data.price.marketCapUsd;
	tokenInfo.price.availableSupply = data.price.availableSupply;
	tokenInfo.price.volume24h = data.price.volume24h;
	tokenInfo.price.currency = data.price.currency;
	tokenInfo.countOps = data.countOps;

	tokenInfo.totalSupplyInWords = (tokenInfo.totalSupply / Math.pow(10, tokenInfo.decimals))  + ' ';
	// tokenInfo.totalSupplyInWords = numberToWords.toWords(tokenInfo.totalSupplyInWords);
	var splitData = tokenInfo.totalSupplyInWords.toString().split(".");
	tokenInfo.totalSupplyInWords = splitData[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	if(splitData.length > 1)
		tokenInfo.totalSupplyInWords = tokenInfo.totalSupplyInWords + "." + splitData[1];

	tokenInfo.totalInWords = tokenInfo.totalIn / Math.pow(10, tokenInfo.decimals);
	tokenInfo.totalOutWords = tokenInfo.totalOut / Math.pow(10, tokenInfo.decimals);

	return tokenInfo;
}
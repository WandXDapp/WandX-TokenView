from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse

import json


def index(request):
	
	tokens = [
		{'name': 'EOS','short': 'EOS', 'address': '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0', 'twitterHandle': 'EOS_io', 'fbHandle': 'eosblockchain', 'redditHandle': 'eos'},
		{'name': 'Qtum', 'short': 'QTM', 'address': '0x9a642d6b3368ddc662CA244bAdf32cDA716005BC', 'twitterHandle': 'QtumOfficial', 'fbHandle': 'QtumOfficial', 'redditHandle': 'Qtum'},
		{'name': 'OmiseGO', 'short': 'OMG', 'address': '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07', 'twitterHandle': 'omise_go', 'fbHandle': 'OmiseGO', 'redditHandle': 'omise_go'},
		{'name': 'Augur', 'short': 'REP', 'address': '0xe94327d07fc17907b4db788e5adf2ed424addff6', 'twitterHandle': 'AugurProject', 'fbHandle': 'augurproject', 'redditHandle': 'Augur'},
		{'name': 'golem-network-tokens', 'short': 'GNT', 'address': '0xa74476443119A942dE498590Fe1f2454d7D4aC0d', 'twitterHandle': 'golemproject', 'fbHandle': 'golemproject', 'redditHandle': 'GolemProject'},
		{'name': 'Status', 'short': 'SNT', 'address': '0x744d70fdbe2ba4cf95131626614a1763df805b9e', 'twitterHandle': 'ethstatus', 'fbHandle': 'ethstatus', 'redditHandle': 'statusim'},
		{'name': 'TenX', 'short': 'TENX', 'address': '0xB97048628DB6B661D4C2aA833e95Dbe1A905B280', 'twitterHandle': 'tenxwallet', 'fbHandle': 'tenxwallet', 'redditHandle': 'TenX'},
		{'name': 'basic-attention-token', 'short': 'BAT', 'address': '0x0d8775f648430679a709e98d2b0cb6250d2887ef', 'twitterHandle': 'attentiontoken', 'fbHandle': 'attentiontoken', 'redditHandle': 'BasicAttentionToken'},
		{'name': 'Santiment', 'short': 'SAN', 'address': '0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098', 'twitterHandle': 'santimentfeed', 'fbHandle': '', 'redditHandle': 'santiment'},
		{'name': 'digixdao', 'short': 'DGD', 'address': '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a', 'twitterHandle': 'digixglobal', 'fbHandle': '', 'redditHandle': 'digix'},
		{'name': 'kyber-network', 'short': 'KNC', 'address': '0xdd974d5c2e2928dea5f71b9825b8b646686bd200', 'twitterHandle': 'kybernetwork', 'fbHandle': 'crystal.kyber.network', 'redditHandle': 'KNCTrader'},
		{'name': 'Civic', 'short': 'CVC', 'address': '0x41e5560054824ea6b0732e656e3ad64e20e94e45', 'twitterHandle': 'civickey', 'fbHandle': 'civictechnologiesinc', 'redditHandle': 'civicplatform'},
		{'name': '0x', 'short': 'ZRX', 'address': '0xe41d2489571d322189246dafa5ebde1f4699f498', 'twitterHandle': '0xproject', 'fbHandle': '0xProject', 'redditHandle': '0xProject'},
		{'name': 'Iconomi', 'short': 'ICN', 'address': '0x888666CA69E0f178DED6D75b5726Cee99A87D698', 'twitterHandle': 'iconominet', 'fbHandle': 'iconomi.net', 'redditHandle': 'ICONOMI'},
		{'name': 'FunFair', 'short': 'FUN', 'address': '0x419d0d8bdd9af5e606ae2232ed285aff190e711b', 'twitterHandle': 'FunFairTech', 'fbHandle': '', 'redditHandle': 'FunfairTech'},
		{'name': 'gnosis-gno', 'short': 'GNO', 'address': '0x6810e776880c02933d47db1b9fc05908e5386b96', 'twitterHandle': 'gnosisPM', 'fbHandle': 'Gnosis.pm', 'redditHandle': 'gnosisPM'},
		{'name': 'Monaco', 'short': 'MCO', 'address': '0xb63b606ac810a52cca15e44bb630fd42d8d1d83d', 'twitterHandle': 'monaco_card', 'fbHandle': 'MonacoCardOfficial', 'redditHandle': 'MonacoCard'},
		{'name': 'Decentraland', 'short': 'DNT', 'address': '0x0f5d2fb29fb7d3cfee444a200298f468908cc942', 'twitterHandle': 'decentraland', 'fbHandle': 'decentraland', 'redditHandle': 'decentraland'},
		{'name': 'Bancor', 'short': 'BNT', 'address': '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c', 'twitterHandle': 'bancornetwork', 'fbHandle': 'bancor', 'redditHandle': 'Bancor'},
		{'name': 'Ethos', 'short': 'ETHOS', 'address': '0x5af2be193a6abca9c8817001f45744777db30756', 'twitterHandle': 'ethos_io', 'fbHandle': 'ethosplatform', 'redditHandle': 'ethos_io'},
		{'name': 'WandX', 'short': 'WAND', 'address': '0x27f610bf36eca0939093343ac28b1534a721dbb4', 'twitterHandle': 'WandXDapp', 'fbHandle': 'wandx.co', 'redditHandle': 'wandX'},
		{'name': 'Bounty0x', 'short': 'BNTY', 'address': '0xd2d6158683aee4cc838067727209a0aaf4359de3', 'twitterHandle': 'Bounty0x', 'fbHandle': '', 'redditHandle': 'Bounty0x'},
		{'name': 'FidentiaX', 'short': 'FDX', 'address': '0x52a7cb918c11a16958be40cba7e31e32a499a465', 'twitterHandle': 'fidentiaX', 'fbHandle': 'fidentiaX', 'redditHandle': 'fidentiax'},
		{'name': 'Wings', 'short': 'WINGS', 'address': '0x667088b212ce3d06a1b553a7221E1fD19000d9aF', 'twitterHandle': 'wingsplatform', 'fbHandle': '', 'redditHandle': 'WingsDAO'},
		{'name': 'Metal', 'short': 'MTL', 'address': '0x667088b212ce3d06a1b553a7221E1fD19000d9aF', 'twitterHandle': 'metalpaysme', 'fbHandle': 'metalpaysme', 'redditHandle': 'MetalPay'}
	];

	return render(request, 'index.html', {'tokens': tokens})
    # return HttpResponse("Hello, world. You're at the polls index.")

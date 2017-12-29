
app.service('indexService', ['apiCalls', function (apiCalls) {

	this.getTotalSupply = function(address){
		return apiCalls.getTotalSupply(address);
	}

	this.getTokenHolders = function(address){
		return apiCalls.getTokenHolders(address);
	}

	this.getTwitterFeeds = function(handle, hash){
		return apiCalls.getTwitterFeeds(handle, hash);
	}

/*
	var companyList = [];
	var newCompany = Company();
	var currentCompany = 0;

	this.getCompanyList = function(){
		return companyList;
	};

	this.getNewCompany = function(){
		return newCompany;
	}

	this.getCompanyListLength = function(){
    	return companyList.length;
    };

    this.getCurrentCompany = function(){
    	return currentCompany;
    }

    this.setCurrentCompany = function(){
    	return apiCalls.company_getCurrentCompany();
    }

	this.getAllCompany = function(){
		apiCalls.company_getAll(companyList);
	};

	this.getSearchCompany = function(search){
		apiCalls.company_getSearch(companyList, search);
	};

	this.addSingleCompany = function(company){
		companyList.push(createCompany(company));
	};

	this.addSingleCompanyToStart = function(company) {
    	companyList.unshift(createCompany(company));
    };

	this.removeLastFromCompanyList = function(){
    	companyList.pop();
    };

    this.removeCompanyFromCompanyList = function(value){
    	for(var i = companyList.length - 1; i >= 0; i--) {
    		if(companyList[i].id === value.id) {
    			companyList.splice(i, 1);
    			break;
    		}
    	}
    };

    this.deleteCompany = function(company){
    	return apiCalls.company_delete(company);
    };

	this.createNewCompany = function(){
		return apiCalls.company_create(newCompany);
	};

	this.resetNewCompany = function(){
		newCompany = Company();
	}

	this.setNewCompanyForEdit = function(company){
		newCompany = createCompany(company);
	}

	this.setDefault = function(companyID){
		apiCalls.company_setDefault(companyID);
	}

	this.addNewHeader = function(newHeader, companyID){
		return apiCalls.company_addNewHeader(newHeader, companyID);
	}

	this.updateCompanyChallan = function(company, col, value){
		return apiCalls.company_updateChallan(company, col, value);
	}
*/
}]);
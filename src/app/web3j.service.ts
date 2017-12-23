import { environment } from './../environments/environment';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
declare var require: (moduleId: string) => any;

@Injectable()
export class Web3jService {

  constructor(private http: Http) {
    const Web3 = require('web3');
    const web3 = new Web3(new Web3.providers.HttpProvider());
    const version = web3.version.api;
    // this.getData();
    // this.getTotalSupply();
  }

  getData() {
  // tslint:disable-next-line:max-line-length
  this.http.get('http://api.etherscan.io/api?module=contract&action=getabi&address=0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0&apikey=' + environment.apiKey)
    .map(response => response.json().result).subscribe(result => {
      console.log('inside result');
      console.log(result);
    });
  }

  getTotalSupply() {
    // tslint:disable-next-line:max-line-length
    this.http.get('https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0&apikey=' + environment.apiKey)
      .map(response => response.json()).catch(this.handleError).subscribe(result => {
        console.log('inside result');
        console.log(result);
      }, error => {
        console.log(error);
      });
  }

  handleError(error: any): Observable < any > {
    console.error('An error occurred', JSON.stringify(error));
    return Observable.throw(error.json());
  }

}

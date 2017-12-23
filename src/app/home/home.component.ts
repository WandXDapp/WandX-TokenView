import { tokens } from './../constants';
import { Router } from '@angular/router';
import { Web3jService } from './../web3j.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  tokens = tokens;
  selectedToken: any;

  ngOnInit() {
  }

  fetchData() {
    console.log('selected Token=' + JSON.stringify(this.selectedToken));
    this.router.navigate(['/token', this.selectedToken.id]);
  }

}

import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tokenId: number;
  constructor(private route: ActivatedRoute, private router: Router,
    private http: Http) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const tokenId = Number(params['id']) || 0;
      if (tokenId) {
        this.tokenId = tokenId;
        this.fetchTokenData();
      } else {
        this.router.navigate(['/home']);
      }
     });
  }

  fetchTokenData() {
    this.http.get('/tweet?ticker=nodejs').subscribe(result => {
      console.log(result);
    });
  }

}

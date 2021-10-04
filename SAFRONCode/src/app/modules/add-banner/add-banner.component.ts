import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.css']
})
export class AddBannerComponent implements OnInit {
  action : any;
  constructor(private router:Router) { }

  ngOnInit(): void {
   let routeURL = this.router.url;
   this.action = routeURL.split('/') ? routeURL.split('/')[2]: 'Add';
  }

}

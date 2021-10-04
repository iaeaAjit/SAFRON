import { Component, OnInit } from '@angular/core';
//import banners from 'all_banner.json';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-manage-banner',
  templateUrl: './manage-banner.component.html',
  styleUrls: ['./manage-banner.component.css']
})
export class ManageBannerComponent implements OnInit {
  //all_banners = banners;
  all_banners: any = [];
  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    this.httpClient.get("./assets/files/all_banner.json").subscribe(data =>{
      console.log('data   ',data);
      this.all_banners = data;
      console.log('');
    })
  }

}

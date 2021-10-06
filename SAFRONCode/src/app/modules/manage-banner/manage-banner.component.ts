import { Component, OnInit } from '@angular/core';
//import banners from 'all_banner.json';
import { HttpClient } from "@angular/common/http";
import { TranslateService } from '@ngx-translate/core';
/* import { MultiLingualService } from 'src/app/core/services/multi-lingual.service'; */
import { BannerService } from '../../core/services/banner.service';

@Component({
  selector: 'app-manage-banner',
  templateUrl: './manage-banner.component.html',
  styleUrls: ['./manage-banner.component.css']
})
export class ManageBannerComponent implements OnInit {
  //all_banners = banners;
  all_banners: any = [];

  constructor(private httpClient: HttpClient,
    /* private _translate: TranslateService,
    private _MultiLingualService: MultiLingualService, */
    private _BannerService: BannerService) {
      /* _translate.addLangs(['en', 'es']);
      _translate.setDefaultLang('en');
      _translate.use('en'); */
  }

  ngOnInit(): void {

   // this._MultiLingualService.localeEvent.subscribe(locale => this._translate.use(locale));

    this._BannerService.getAll().subscribe(data => {
      /* for (const d of (data as any)) {
        this.all_banners.push({
          Id: d.name,
          Title: d.price          
        });        
      } */
      console.log('data   ',data);
        this.all_banners = data;
      console.log(this.all_banners);
    });


    /* this.httpClient.get("./assets/files/all_banner.json").subscribe(data =>{
      console.log('data   ',data);
      this.all_banners = data;
      console.log('');
    }) */
  }

}

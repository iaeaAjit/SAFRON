import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem} from './nav-item';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  // navItems: NavItem[] = [
  //   {
  //     displayName: 'Home | translate',
  //     route: 'home'
  //   },
  //   {
  //     displayName: 'Reports | translate',
  //     children: [
  //       {
  //         displayName: 'Search Reports',
  //         route:'searchincident-report'
  //       },
  //       {
  //         displayName: 'Submit Reports',
  //         route:''
  //       }
  //     ]
  //   },
  //   {
  //     displayName: 'Documents & Links',
  //     route: 'documents-links'
  //   },
  //   {
  //     displayName: 'Process Steps',
  //     route: 'process-steps'
  //   },
  //   {
  //     displayName: 'Admin',
  //     children: [
  //       {
  //         displayName: 'Manage Banner',
  //         route:''
  //       },
  //       {
  //         displayName: 'Manage Latest Updates',
  //         route:''
  //       },
  //       {
  //         displayName: 'Manage Featured Reports',
  //         route: ''
  //       }
  //     ]
  //   },
  //   {
  //     displayName: 'Help',
  //     route: ''
  //   },
  // ];
  selectedlanguage: any = "en"
  constructor(public translate: TranslateService) { 
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
  }
  
  onLangChange(lang:any){
    console.log(lang)
    this.selectedlanguage = lang
    this.translate.use(lang);
  }

}

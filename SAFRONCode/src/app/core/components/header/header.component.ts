import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from './nav-item';
import { TranslateService } from '@ngx-translate/core';
import { MultiLingualService } from '../../services/multi-lingual.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  /* navItems: NavItem[] = [
    {
      displayName: 'Home',
      route: 'home'
    },
    {
      displayName: 'Reports',
      children: [
        {
          displayName: 'Search Reports',
          route:'searchincident-report'
        },
        {
          displayName: 'Submit Reports',
          route:''
        }
      ]
    },
    {
      displayName: 'Documents & Links',
      route: 'documents-links'
    },
    {
      displayName: 'Process Steps',
      route: 'process-steps'
    },
    {
      displayName: 'Admin',
      children: [
        {
          displayName: 'Manage Banner',
          route:'banner'
        },
        {
          displayName: 'Manage Latest Updates',
          route:''
        },
        {
          displayName: 'Manage Featured Reports',
          route: ''
        }
      ]
    },
    {
      displayName: 'Help',
      route: ''
    },
  ]; */

  constructor(public translate: TranslateService,
    private _MultiLingualService: MultiLingualService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
  }

  onLangChange(lang: any) {
    console.log(lang)
    this._MultiLingualService.changeLocale(lang);
    this.translate.use(lang);
  }

}

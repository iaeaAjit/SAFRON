import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavItem} from './nav-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  navItems: NavItem[] = [
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
          route:''
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
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
 

}

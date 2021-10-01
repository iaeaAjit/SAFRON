import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { ManageBannerComponent } from './modules/manage-banner/manage-banner.component';
import { SearchReportsComponent } from './modules/search-reports/search-reports.component'

const routes: Routes = [
  {
    path: "",
    redirectTo: '/home',
    pathMatch:'full'
  },
  {
    path: "home",
    component: HomePageComponent,
    data: {
      title: "Home page"
    }
  },
  {
    path: "banner",
    component: ManageBannerComponent,
    data: {
      title: "Manage Banner page"
    }
  },
  {
    path: "searchincident-report",
    component: SearchReportsComponent,
    data: {
      title: "Search Reports page"
    }
  },
  {
    path: "**",
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { SearchReportsComponent } from './modules/search-reports/search-reports.component'

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    data: {
      title: "Home page"
    }
  },
  {
    path: "searchincident-report",
    component: SearchReportsComponent,
    data: {
      title: "Search Reports page"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

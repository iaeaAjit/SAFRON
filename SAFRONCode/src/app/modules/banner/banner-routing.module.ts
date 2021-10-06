import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBannerComponent } from '../add-banner/add-banner.component';
import { ManageBannerComponent } from '../manage-banner/manage-banner.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: '/banner'
  },
  {
    path: "banner",
    component: ManageBannerComponent,
    data: {
      title: "Manage Banner page"
    }
  },
  {
    path:'banner/add',
    component: AddBannerComponent,
    data: {
      title: "Add Banner page"
    }
  },
  {
    path:'banner/edit',
    component: AddBannerComponent,
    data: {
      title: "Edit Banner page"
    }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannerRoutingModule { }

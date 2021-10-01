import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { SearchReportsComponent } from './modules/search-reports/search-reports.component';
import { SubmitReportsComponent } from './modules/submit-reports/submit-reports.component';
import { StatisticalReportsComponent } from './modules/statistical-reports/statistical-reports.component';
import { ProcessStepsComponent } from './modules/process-steps/process-steps.component';
import { DocumentsLinksComponent } from './modules/documents-links/documents-links.component';

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
  },
  {
    path: "submitincident-report",
    component: SubmitReportsComponent,
    data: {
      title: "Submit Reports page"
    }
  },
  {
    path: "statistical-report",
    component: StatisticalReportsComponent,
    data: {
      title: "Statistical Reports page"
    }
  },
  {
    path: "process-steps",
    component: ProcessStepsComponent,
    data: {
      title: "Process Steps page"
    }
  },
  {
    path: "documents-links",
    component: DocumentsLinksComponent,
    data: {
      title: "Documents & Links page"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

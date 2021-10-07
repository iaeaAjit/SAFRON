import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { SearchReportsComponent } from './modules/search-reports/search-reports.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule} from '@angular/material/menu';
import { SubmitReportsComponent } from './modules/submit-reports/submit-reports.component';
import { StatisticalReportsComponent } from './modules/statistical-reports/statistical-reports.component';
import { DocumentsLinksComponent } from './modules/documents-links/documents-links.component';
import { ProcessStepsComponent } from './modules/process-steps/process-steps.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatTreeModule} from '@angular/material/tree';
import { MatIconModule} from '@angular/material/icon';
import { TreeModule } from 'ng2-tree';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    SearchReportsComponent,
    SubmitReportsComponent,
    StatisticalReportsComponent,
    DocumentsLinksComponent,
    ProcessStepsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatMenuModule,
    HttpClientModule,
    MatTreeModule,
    MatIconModule,
    TreeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  entryComponents:[ProcessStepsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
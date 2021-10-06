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
import { MenuItemComponent} from './core/components/header/menu-item/menu-item.component';
/* import { ManageBannerComponent } from './modules/manage-banner/manage-banner.component';
import { AddBannerComponent } from './modules/add-banner/add-banner.component'; */
import { SubmitReportsComponent } from './modules/submit-reports/submit-reports.component';
import { StatisticalReportsComponent } from './modules/statistical-reports/statistical-reports.component';
import { DocumentsLinksComponent } from './modules/documents-links/documents-links.component';
import { ProcessStepsComponent } from './modules/process-steps/process-steps.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {ReactiveFormsModule} from '@angular/forms';
import { BannerModule } from './modules/banner/banner.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    SearchReportsComponent,
    MenuItemComponent,
    /* ManageBannerComponent,
    AddBannerComponent, */
    SubmitReportsComponent,
    StatisticalReportsComponent,
    DocumentsLinksComponent,
    ProcessStepsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatMenuModule,
    HttpClientModule,
    
    BannerModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//AOT compilation suport
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}
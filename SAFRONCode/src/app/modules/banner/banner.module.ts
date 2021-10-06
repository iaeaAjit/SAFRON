import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//AOT compilation suport
export function bannerHttpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/banner/','.json');
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BannerRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: bannerHttpTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  exports:[TranslateModule,FormsModule,
    ReactiveFormsModule]
})
export class BannerModule { }

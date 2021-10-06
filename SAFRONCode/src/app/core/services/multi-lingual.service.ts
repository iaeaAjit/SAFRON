import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultiLingualService {
  localeEvent = new Subject<string>();

  constructor(private _translaye: TranslateService) { }

  changeLocale(locale: string) {
    this._translaye.use(locale);
    this.localeEvent.next(locale);
  }
}

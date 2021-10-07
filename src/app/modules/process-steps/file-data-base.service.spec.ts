import { TestBed } from '@angular/core/testing';

import { FileDataBaseService } from './file-data-base.service';

describe('FileDataBaseService', () => {
  let service: FileDataBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileDataBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

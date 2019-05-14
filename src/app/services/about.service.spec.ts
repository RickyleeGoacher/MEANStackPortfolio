import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { AboutService } from './about.service';

describe('AboutService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  	imports: [HttpClientModule, RouterTestingModule]
  }));

  it('should be created', () => {
    const service: AboutService = TestBed.get(AboutService);
    expect(service).toBeTruthy();
  });
});

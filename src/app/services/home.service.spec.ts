import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeService } from './home.service';

describe('HomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  	imports: [HttpClientModule, RouterTestingModule]
  }));

  it('should be created', () => {
    const service: HomeService = TestBed.get(HomeService);
    expect(service).toBeTruthy();
  });
});

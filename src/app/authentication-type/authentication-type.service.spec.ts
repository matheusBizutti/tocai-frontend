import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationTypeService } from './authentication-type.service';

describe('AuthenticationTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationTypeService]
    });
  });

  it('should be created', inject([AuthenticationTypeService], (service: AuthenticationTypeService) => {
    expect(service).toBeTruthy();
  }));
});

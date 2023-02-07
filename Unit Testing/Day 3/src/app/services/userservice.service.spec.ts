import { TestBed } from '@angular/core/testing';

import { UserserviceService } from './userservice.service';
import { waitForAsync } from '@angular/core/testing';

describe('UserserviceService', () => {
  let service: UserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Should return 'real value' from getValue", () => {
    let value = service.getValue();
    expect(value).toEqual('real value');
    // spyOn(service, 'getValue');
    // expect(service.getValue).toHaveBeenCalled();
    // expect(service.getValue).toHaveBeenCalledTimes(1);
  });
});
// describe('userService', () => {
//   let service: UserserviceService;
//   spyOn(service, 'getValue');
// });

import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResourceService } from './resource.service';

const ID_PROVIDER = { provide: String, useValue: '1234' };

describe('Service: Resource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ResourceService, ID_PROVIDER],
    });
  });

  it('should ...', inject([ResourceService], (service: ResourceService<unknown, string>) => {
    expect(service).toBeTruthy();
  }));
});

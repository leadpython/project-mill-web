import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorProfilePageComponent } from './vendor-profile-page.component';

describe('VendorProfilePageComponent', () => {
  let component: VendorProfilePageComponent;
  let fixture: ComponentFixture<VendorProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

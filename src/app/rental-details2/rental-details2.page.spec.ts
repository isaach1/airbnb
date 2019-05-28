import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDetails2Page } from './rental-details2.page';

describe('RentalDetails2Page', () => {
  let component: RentalDetails2Page;
  let fixture: ComponentFixture<RentalDetails2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalDetails2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalDetails2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

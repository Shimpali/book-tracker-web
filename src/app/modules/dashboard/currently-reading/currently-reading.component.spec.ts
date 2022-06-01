/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CurrentlyReadingComponent } from './currently-reading.component';

describe('CurrentlyReadingComponent', () => {
  let component: CurrentlyReadingComponent;
  let fixture: ComponentFixture<CurrentlyReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentlyReadingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentlyReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

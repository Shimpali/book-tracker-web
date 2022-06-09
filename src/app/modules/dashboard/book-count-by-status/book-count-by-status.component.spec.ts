/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookCountByStatusComponent } from './book-count-by-status.component';

describe('BookCountByStatusComponent', () => {
  let component: BookCountByStatusComponent;
  let fixture: ComponentFixture<BookCountByStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookCountByStatusComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCountByStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchBooksComponent } from './search-books.component';

describe('SearchBooksComponent', () => {
  let component: SearchBooksComponent;
  let fixture: ComponentFixture<SearchBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBooksComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

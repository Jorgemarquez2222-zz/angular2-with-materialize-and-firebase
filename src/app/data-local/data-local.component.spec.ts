/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GrillasComponent } from './grillas.component';

describe('GrillasComponent', () => {
  let component: GrillasComponent;
  let fixture: ComponentFixture<GrillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

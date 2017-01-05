/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mostrar2Component } from './mostrar2.component';

describe('Mostrar2Component', () => {
  let component: Mostrar2Component;
  let fixture: ComponentFixture<Mostrar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mostrar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mostrar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

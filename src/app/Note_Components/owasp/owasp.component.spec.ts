import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OWASPComponent } from './owasp.component';

describe('OWASPComponent', () => {
  let component: OWASPComponent;
  let fixture: ComponentFixture<OWASPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OWASPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OWASPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

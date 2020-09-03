import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JspComponent } from './jsp.component';

describe('JspComponent', () => {
  let component: JspComponent;
  let fixture: ComponentFixture<JspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneresponsiveComponent } from './phoneresponsive.component';

describe('PhoneresponsiveComponent', () => {
  let component: PhoneresponsiveComponent;
  let fixture: ComponentFixture<PhoneresponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneresponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneresponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

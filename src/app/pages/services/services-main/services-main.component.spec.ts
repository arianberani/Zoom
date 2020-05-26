import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesMainComponent } from './services-main.component';

describe('ServicesMainComponent', () => {
  let component: ServicesMainComponent;
  let fixture: ComponentFixture<ServicesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

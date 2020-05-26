import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDitailsComponent } from './portfolio-ditails.component';

describe('PortfolioDitailsComponent', () => {
  let component: PortfolioDitailsComponent;
  let fixture: ComponentFixture<PortfolioDitailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioDitailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

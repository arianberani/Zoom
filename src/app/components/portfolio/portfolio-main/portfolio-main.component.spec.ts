import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMainComponent } from './portfolio-main.component';

describe('PortfolioMainComponent', () => {
  let component: PortfolioMainComponent;
  let fixture: ComponentFixture<PortfolioMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

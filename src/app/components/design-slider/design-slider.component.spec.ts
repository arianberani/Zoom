import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSliderComponent } from './design-slider.component';

describe('DesignSliderComponent', () => {
  let component: DesignSliderComponent;
  let fixture: ComponentFixture<DesignSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

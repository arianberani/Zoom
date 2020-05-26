import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernDesignComponent } from './modern-design.component';

describe('ModernDesignComponent', () => {
  let component: ModernDesignComponent;
  let fixture: ComponentFixture<ModernDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

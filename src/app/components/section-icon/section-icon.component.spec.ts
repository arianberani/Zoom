import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIconComponent } from './section-icon.component';

describe('SectionIconComponent', () => {
  let component: SectionIconComponent;
  let fixture: ComponentFixture<SectionIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeSiteComponent } from './some-site.component';

describe('SomeSiteComponent', () => {
  let component: SomeSiteComponent;
  let fixture: ComponentFixture<SomeSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

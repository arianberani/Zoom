import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubbscribeComponent } from './subbscribe.component';

describe('SubbscribeComponent', () => {
  let component: SubbscribeComponent;
  let fixture: ComponentFixture<SubbscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubbscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubbscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

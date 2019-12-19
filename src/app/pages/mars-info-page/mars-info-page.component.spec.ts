import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsInfoPageComponent } from './mars-info-page.component';

describe('MarsInfoPageComponent', () => {
  let component: MarsInfoPageComponent;
  let fixture: ComponentFixture<MarsInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

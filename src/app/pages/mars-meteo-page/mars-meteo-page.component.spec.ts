import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsMeteoPageComponent } from './mars-meteo-page.component';

describe('MarsMeteoPageComponent', () => {
  let component: MarsMeteoPageComponent;
  let fixture: ComponentFixture<MarsMeteoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsMeteoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsMeteoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

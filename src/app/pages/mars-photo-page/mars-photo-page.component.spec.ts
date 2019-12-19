import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsPhotoPageComponent } from './mars-photo-page.component';

describe('MarsPhotoPageComponent', () => {
  let component: MarsPhotoPageComponent;
  let fixture: ComponentFixture<MarsPhotoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsPhotoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsPhotoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

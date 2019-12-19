import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCommentFormComponent } from './open-comment-form.component';

describe('OpenCommentFormComponent', () => {
  let component: OpenCommentFormComponent;
  let fixture: ComponentFixture<OpenCommentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenCommentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

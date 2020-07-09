import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewimageComponent } from './reviewimage.component';

describe('ReviewimageComponent', () => {
  let component: ReviewimageComponent;
  let fixture: ComponentFixture<ReviewimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

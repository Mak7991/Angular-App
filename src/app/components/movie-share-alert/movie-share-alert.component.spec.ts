import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieShareAlertComponent } from './movie-share-alert.component';

describe('MovieShareAlertComponent', () => {
  let component: MovieShareAlertComponent;
  let fixture: ComponentFixture<MovieShareAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieShareAlertComponent]
    });
    fixture = TestBed.createComponent(MovieShareAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

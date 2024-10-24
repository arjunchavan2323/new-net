import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDashbordComponent } from './movie-dashbord.component';

describe('MovieDashbordComponent', () => {
  let component: MovieDashbordComponent;
  let fixture: ComponentFixture<MovieDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

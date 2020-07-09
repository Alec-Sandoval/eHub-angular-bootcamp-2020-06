import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvPosterComponent } from './tv-poster.component';

describe('TvPosterComponent', () => {
  let component: TvPosterComponent;
  let fixture: ComponentFixture<TvPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

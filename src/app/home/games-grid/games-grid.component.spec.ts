import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesGridComponent } from './games-grid.component';

describe('GamesGridComponent', () => {
  let component: GamesGridComponent;
  let fixture: ComponentFixture<GamesGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesGridComponent]
    });
    fixture = TestBed.createComponent(GamesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

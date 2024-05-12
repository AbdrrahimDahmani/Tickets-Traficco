import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomBlockComponent } from './welcom-block.component';

describe('WelcomBlockComponent', () => {
  let component: WelcomBlockComponent;
  let fixture: ComponentFixture<WelcomBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomBlockComponent]
    });
    fixture = TestBed.createComponent(WelcomBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

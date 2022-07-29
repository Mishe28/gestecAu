import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorlayoutComponent } from './coordinatorlayout.component';

describe('CoordinatorlayoutComponent', () => {
  let component: CoordinatorlayoutComponent;
  let fixture: ComponentFixture<CoordinatorlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinatorlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinatorlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

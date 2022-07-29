import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCoordinatorComponent } from './dashboard-coordinator.component';

describe('DashboardCoordinatorComponent', () => {
  let component: DashboardCoordinatorComponent;
  let fixture: ComponentFixture<DashboardCoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCoordinatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCoordinatorComponent } from './settings-coordinator.component';

describe('SettingsCoordinatorComponent', () => {
  let component: SettingsCoordinatorComponent;
  let fixture: ComponentFixture<SettingsCoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsCoordinatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

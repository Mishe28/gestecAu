import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDistributiveComponent } from './teacher-distributive.component';

describe('TeacherDistributiveComponent', () => {
  let component: TeacherDistributiveComponent;
  let fixture: ComponentFixture<TeacherDistributiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherDistributiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherDistributiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

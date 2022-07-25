import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorePassComponent } from './restore-pass.component';

describe('RestorePassComponent', () => {
  let component: RestorePassComponent;
  let fixture: ComponentFixture<RestorePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestorePassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestorePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroverifiComponent } from './registroverifi.component';

describe('RegistroverifiComponent', () => {
  let component: RegistroverifiComponent;
  let fixture: ComponentFixture<RegistroverifiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroverifiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroverifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

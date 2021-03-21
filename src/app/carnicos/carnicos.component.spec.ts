import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnicosComponent } from './carnicos.component';

describe('CarnicosComponent', () => {
  let component: CarnicosComponent;
  let fixture: ComponentFixture<CarnicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

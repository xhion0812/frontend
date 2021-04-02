import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumbresComponent } from './legumbres.component';

describe('LegumbresComponent', () => {
  let component: LegumbresComponent;
  let fixture: ComponentFixture<LegumbresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegumbresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegumbresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

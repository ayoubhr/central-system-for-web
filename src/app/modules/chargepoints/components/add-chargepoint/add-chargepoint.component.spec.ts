import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChargepointComponent } from './add-chargepoint.component';

describe('AddChargepointComponent', () => {
  let component: AddChargepointComponent;
  let fixture: ComponentFixture<AddChargepointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChargepointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChargepointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargepointsListComponent } from './chargepoints-list.component';

describe('ChargepointsListComponent', () => {
  let component: ChargepointsListComponent;
  let fixture: ComponentFixture<ChargepointsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargepointsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargepointsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

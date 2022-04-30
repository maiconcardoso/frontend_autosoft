import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemReadComponent } from './order-item-read.component';

describe('OrderItemReadComponent', () => {
  let component: OrderItemReadComponent;
  let fixture: ComponentFixture<OrderItemReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderItemReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRootComponent } from './customer-root.component';

describe('CustomerRootComponent', () => {
  let component: CustomerRootComponent;
  let fixture: ComponentFixture<CustomerRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerRootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

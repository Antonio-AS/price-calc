import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceFactorComponent } from './price-factor.component';

describe('PriceFactorComponent', () => {
  let component: PriceFactorComponent;
  let fixture: ComponentFixture<PriceFactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

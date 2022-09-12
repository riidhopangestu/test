import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttableDetailComponent } from './producttable-detail.component';

describe('ProducttableDetailComponent', () => {
  let component: ProducttableDetailComponent;
  let fixture: ComponentFixture<ProducttableDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducttableDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducttableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingMarketplaceComponent } from './setting-marketplace.component';

describe('SettingMarketplaceComponent', () => {
  let component: SettingMarketplaceComponent;
  let fixture: ComponentFixture<SettingMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingMarketplaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

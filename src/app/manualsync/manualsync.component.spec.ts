import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualsyncComponent } from './manualsync.component';

describe('ManualsyncComponent', () => {
  let component: ManualsyncComponent;
  let fixture: ComponentFixture<ManualsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualsyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

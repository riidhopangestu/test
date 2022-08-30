import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemposComponent } from './systempos.component';

describe('SystemposComponent', () => {
  let component: SystemposComponent;
  let fixture: ComponentFixture<SystemposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

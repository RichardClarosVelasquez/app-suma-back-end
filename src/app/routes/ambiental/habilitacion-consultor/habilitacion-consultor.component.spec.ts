import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitacionConsultorComponent } from './habilitacion-consultor.component';

describe('HabilitacionConsultorComponent', () => {
  let component: HabilitacionConsultorComponent;
  let fixture: ComponentFixture<HabilitacionConsultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilitacionConsultorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitacionConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

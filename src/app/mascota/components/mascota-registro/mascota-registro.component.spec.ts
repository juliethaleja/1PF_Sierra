import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaRegistroComponent } from './mascota-registro.component';

describe('MascotaRegistroComponent', () => {
  let component: MascotaRegistroComponent;
  let fixture: ComponentFixture<MascotaRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotaRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

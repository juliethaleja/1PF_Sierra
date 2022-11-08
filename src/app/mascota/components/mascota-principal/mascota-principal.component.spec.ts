import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaPrincipalComponent } from './mascota-principal.component';

describe('MascotaPrincipalComponent', () => {
  let component: MascotaPrincipalComponent;
  let fixture: ComponentFixture<MascotaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotaPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

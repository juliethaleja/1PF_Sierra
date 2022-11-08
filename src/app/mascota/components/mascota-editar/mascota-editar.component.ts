import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MascotaPrincipalComponent } from '../mascota-principal/mascota-principal.component';

@Component({
  selector: 'app-mascota-editar',
  templateUrl: './mascota-editar.component.html',
  styleUrls: ['./mascota-editar.component.css']
})
export class MascotaEditarComponent implements OnInit {

  formularioMascota: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
  private dialogRef: MatDialogRef<MascotaPrincipalComponent>,private fb: FormBuilder) {
    console.log(data);

    this.formularioMascota = fb.group({
      nombre: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      edad: new FormControl('', [Validators.required]),
      raza: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
      ])
    });
  }
  ngOnInit(): void {
  }
  editarMascota(){
    console.log(this.formularioMascota.value);

  }
}

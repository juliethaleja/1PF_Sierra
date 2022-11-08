import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Mascota } from 'src/app/models/mascotas';

@Component({
  selector: 'app-mascota-registro',
  templateUrl: './mascota-registro.component.html',
  styleUrls: ['./mascota-registro.component.css']
})
export class MascotaRegistroComponent implements OnInit {
  @Input () editarDatosencapsulados:any;
  @Output() eventoAgregarmascota: EventEmitter<Mascota> =
  new EventEmitter<Mascota>();

  formularioMascota: FormGroup;
  constructor(private fb: FormBuilder) {
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
  ngOnInit(): void {}
  agregarMascota() {
    let mascota:Mascota= this.formularioMascota.value;
    this.eventoAgregarmascota.emit(mascota);
    this.formularioMascota.reset({
      nombre: '',
      edad: '',
      raza: ''
    });
  }
}

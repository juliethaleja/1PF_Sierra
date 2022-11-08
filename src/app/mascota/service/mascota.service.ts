import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Mascota } from 'src/app/models/mascotas';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  mascotas: Mascota[] = [
    {
      id: 1,
      nombre: 'Lupita',
      edad: 12,
      raza: 'Pitbull'
    },
    {
      id: 1,
      nombre: 'Pepe',
      edad: 12,
      raza: 'pequinez',
    },
    {
      id: 1,
      nombre: 'kitty',
      edad: 12,
      raza: 'Criolla',

    },
  ];
  MascotaObservable: Observable<Mascota[]>;
  constructor() {
    this.MascotaObservable = new Observable<Mascota[]>((suscriptor) => {
      suscriptor.next(this.mascotas);
    });
  }
  obtenerMascotaObservable(){
    return of(this.mascotas);
  }
  obtenerMascota() {
    return this.MascotaObservable;
  }
  agregarMascota(mascota:Mascota){
    this.mascotas.push(mascota);
  }
  eliminarMascota(location:number){
    this.mascotas.splice(location, 1);
    return of(this.mascotas);

  }}

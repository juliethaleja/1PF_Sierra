import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotaRoutingModule } from './mascota-routing.module';
import { MascotaPrincipalComponent } from './components/mascota-principal/mascota-principal.component';
import { MascotaRegistroComponent } from './components/mascota-registro/mascota-registro.component';
import { MascotaEliminarComponent } from './components/mascota-eliminar/mascota-eliminar.component';
import { TitulosDirective } from './directive/titulos.directive';

import { SharedModule } from 'src/app/shared/shared.module';
import { MascotaEditarComponent } from './components/mascota-editar/mascota-editar.component';



@NgModule({
  declarations: [
    MascotaPrincipalComponent,
    MascotaRegistroComponent,
    MascotaEliminarComponent,
    TitulosDirective,
    MascotaEditarComponent
  ],
  imports: [
    CommonModule,
    MascotaRoutingModule,
    SharedModule
  ]
})
export class MascotaModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotaPrincipalComponent } from './components/mascota-principal/mascota-principal.component';

const routes: Routes = [
  { path: 'mascotas', component: MascotaPrincipalComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotaRoutingModule { }

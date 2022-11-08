import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { Mascota } from 'src/app/models/mascotas';
import { MascotaEliminarComponent } from '../mascota-eliminar/mascota-eliminar.component';
import { MascotaService } from 'src/app/mascota/service/mascota.service';
import { MascotaEditarComponent } from '../mascota-editar/mascota-editar.component';


@Component({
  selector: 'app-mascota-principal',
  templateUrl: './mascota-principal.component.html',
  styleUrls: ['./mascota-principal.component.css']
})
export class MascotaPrincipalComponent implements OnInit {

  mascota!: Mascota[];
  mascotaList!: Mascota[];
  ObservableSuscripcion:any;
  dataSource = new MatTableDataSource<Mascota>();

  constructor(public dialog: MatDialog, private MascotaService: MascotaService) {
    this.ObservableSuscripcion=MascotaService.obtenerMascotaObservable().subscribe({
      next: (mascota: Mascota[]) => {
        this.mascotaList = mascota;
      },
      error: (error) => {
        console.error(error);
      },
    });


  }

  ngOnInit(): void {}

  agregarMascota(registroMascota: Mascota) {
    let id = this.mascotaList.length + 1;
    registroMascota['id'] = id;
    this.MascotaService.agregarMascota(registroMascota);
  }

  dialogEliminarmascotas(id: number) {
    let dialogRef = this.dialog.open(MascotaEliminarComponent, {
      width: '250px',
      data: '',
    });

   dialogRef.afterClosed().subscribe(res => {
    if (res.  data == 'Eliminar') {
      const location = this.mascotaList.findIndex((mascota) => mascota.id == id);
      this.MascotaService.eliminarMascota(location);
    }
  })
  }
  dialogEditarmascotas(id: number) {
    const location = this.mascotaList.findIndex((mascota) => mascota.id == id);
console.log(location);

    let dialogRef = this.dialog.open(MascotaEditarComponent, {
      width: '500px',
      data: id,
    });

    dialogRef.afterClosed().subscribe(res => {
/*    if (res.  data == 'Eliminar') {
      const location = this.mascotaList.findIndex((mascota) => mascota.id == id);
      this.MascotaService.eliminarMascota(location);
    } */
  })
  }
  editarMascotas() {}

}

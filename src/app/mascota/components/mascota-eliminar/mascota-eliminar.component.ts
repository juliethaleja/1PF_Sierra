import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MascotaPrincipalComponent } from '../mascota-principal/mascota-principal.component';

@Component({
  selector: 'app-mascota-eliminar',
  templateUrl: './mascota-eliminar.component.html',
  styleUrls: ['./mascota-eliminar.component.css']
})
export class MascotaEliminarComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
  private dialogRef: MatDialogRef<MascotaPrincipalComponent>) { }

  ngOnInit(): void {
  }
confirmDelete(mensaje:string){
  this.dialogRef.close({ data: mensaje })
}

}

import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { reporte } from '../../model/reporte.component';
import { NgForm }  from '@angular/forms';

declare var $:any;

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styles: []
})
export class IssuesComponent implements OnInit {

  constructor( private servive: AppService) { }

  reportes: any = [];
  alta: any = {};
  mensaje: string;
  statusResponse: boolean;
  alert: boolean;

  ngOnInit() {
    this.getReportes();
  }

  getReportes(){
    this.servive.getIssues().subscribe( data =>{
      this.reportes = data;
    }, error =>{
      this.mensajeRespose(false, error.status);
    })
  }

  altaReporte(form: NgForm){
    if(form.valid){
      let body = {
        "title": form.value.titulo,
            "body": form.value.detalle,
            "labels": [
              "Demo Angular"
            ]
      }
      this.servive.setNuevoIssue(body).subscribe( data =>{
        this.getReportes();
        this.mensajeRespose(true);
      }, error => {
        this.mensajeRespose(false, error.status);
      })
      $('#altaReporte').modal('hide');
    }
  }

  mensajeRespose(status: boolean, codeError?: string): void{
    this.alert = true;
    if(status){
      this.statusResponse = true;
      this.mensaje = 'Nuevo reporte creado correctamente';
    }else{
      this.statusResponse = false;
      this.mensaje = `Lo sentimos, hubo un problema. ${codeError}`;
    }
    setTimeout( ()=>{
      this.alert = false;
    },4000)
  }

  limpiarForm(): void{
    this.alta.titulo = '';
    this.alta.detalle = '';
  }

}

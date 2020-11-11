import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NuevoConductorPage } from './nuevo-conductor/nuevoConductor.page';

let ELEMENT_DATA:any[] = [
  {
    id:1,
    conductores:[
      {tipoId:"CC",numeroId:"1234567",nombre:"ALENXADER PEREZ", direccion:"CALLE FALSA 123", ciudad:"Bogota",departamento:"Bogota",pais:"Colombia",telefono:"1234567"},
      {tipoId:"CC",numeroId:"1234567",nombre:"ALENXADER PEREZ", direccion:"CALLE FALSA 123", ciudad:"Bogota",departamento:"Bogota",pais:"Colombia",telefono:"1234567"}
    ]
  },  
  {
    id:2,
    conductores:[
      {tipoId:"CC",numeroId:"1234567",nombre:"ALENXADER PEREZ", direccion:"CALLE FALSA 123", ciudad:"Bogota",departamento:"Bogota",pais:"Colombia",telefono:"1234567"},
      {tipoId:"CC",numeroId:"1234567",nombre:"ALENXADER PEREZ", direccion:"CALLE FALSA 123", ciudad:"Bogota",departamento:"Bogota",pais:"Colombia",telefono:"1234567"}
      
    ]
  },
];

@Component({
  selector: 'app-ConductoresPage',
  templateUrl: 'conductores.page.html',
  styleUrls: ['conductores.page.scss']
})
export class ConductoresPage {

  dataSource;
  id_vehiculo:Number;
  

  constructor(public route:ActivatedRoute, public modalController: ModalController ) {
    this.dataSource = [];
    this.route.params.subscribe((params: any) => {
      if (params['id_vehiculo']) {
        this.id_vehiculo = Number.parseInt(params['id_vehiculo']);
        this.consultarConductores();
      }
      
    });
    

  }

  consultarConductores(){
    let conductores = ELEMENT_DATA.filter(e=>e.id==this.id_vehiculo);
    if (conductores.length<=0)
      return;
    this.dataSource = conductores[0]["conductores"];
  }


  async nuevoConductor() {
    let self = this;
    const modal = await this.modalController.create({
      component: NuevoConductorPage,
      cssClass: 'nuevoConductor',
      componentProps: {
        conductor: {
        }
      }
    });
    modal.onDidDismiss().then((datos)=>{
      if (datos.data.evento=='CREATE')
        self.dataSource.push(datos.data.conductor);
    });
    return await modal.present();
  }
}

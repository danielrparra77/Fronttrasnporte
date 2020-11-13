import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NuevoConductorPage } from './nuevo-conductor/nuevoConductor.page';
import { AjaxService } from '../../providers/ajax/ajax.service';



@Component({
  selector: 'app-ConductoresPage',
  templateUrl: 'conductores.page.html',
  styleUrls: ['conductores.page.scss']
})
export class ConductoresPage {

  dataSource;
  id_vehiculo:Number;
  

  constructor(public route:ActivatedRoute
    , public modalController: ModalController
    , private ajax: AjaxService ) {
    this.dataSource = [];
    this.route.params.subscribe((params: any) => {
      if (params['id_vehiculo']) {
        this.id_vehiculo = Number.parseInt(params['id_vehiculo']);
        this.consultarConductores();
      }
      
    });
    

  }

  consultarConductores(){
    let self = this;
    this.ajax.post('api/consultarConductores',{id_vehiculo:this.id_vehiculo}).subscribe(data => {
      if (data.success) {
        self.dataSource = data.response.conductores["conductores"];
      }
    });
  }

  async crearConductor(nuevoConductor){
    let self = this;
    this.ajax.post('api/crearConductor',{nuevoConductor,id_vehiculo:this.id_vehiculo}).subscribe(data => {
      if (data.success) {
        nuevoConductor.id_conductor = data.response.id_conductor;
        self.dataSource.push(nuevoConductor);
      }
    });
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
      return self.crearConductor(datos.data.conductor);
    });
    return await modal.present();
  }
}

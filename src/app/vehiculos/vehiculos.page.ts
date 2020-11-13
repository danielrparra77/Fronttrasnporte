import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NuevoVehiculoPage } from './nuevo-vehiculo/nuevoVehiculo.page';
import { AjaxService } from '../../providers/ajax/ajax.service';


@Component({
  selector: 'app-vehiculosPage',
  templateUrl: 'vehiculos.page.html',
  styleUrls: ['vehiculos.page.scss']
})
export class VehiculosPage {

  dataSource;
  id_empresa:Number;
  

  constructor(public route:ActivatedRoute
    , public modalController: ModalController
    , private ajax: AjaxService ) {
    this.dataSource = [];
    this.route.params.subscribe((params: any) => {
      if (params['id_empresa']) {
        this.id_empresa = Number.parseInt(params['id_empresa']);
        this.consultarVehiculos();
      }
      
    });
    

  }

  consultarVehiculos(){
    let self = this;
    this.ajax.post('api/consultarVehiculos',{id_empresa:this.id_empresa}).subscribe(data => {
      if (data.success) {
        self.dataSource = data.response.vehiculos["vehiculos"];
      }
    });
  }

  async crearVehiculo(nuevoVehiculo){
    let self = this;
    this.ajax.post('api/crearVehiculo',{nuevoVehiculo,id_empresa:this.id_empresa}).subscribe(data => {
      if (data.success) {
        nuevoVehiculo.id_vehiculo = data.response.id_vehiculo;
        self.dataSource.push(nuevoVehiculo);
      }
    });
  }

  async nuevoVehiculo() {
    let self = this;
    const modal = await this.modalController.create({
      component: NuevoVehiculoPage,
      cssClass: 'nuevoVehiculo',
      componentProps: {
        vehiculo: {
        }
      }
    });
    modal.onDidDismiss().then((datos)=>{
      if (datos.data.evento=='CREATE')
      return self.crearVehiculo(datos.data.vehiculo);
    });
    return await modal.present();
  }
}

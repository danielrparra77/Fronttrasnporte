import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NuevoVehiculoPage } from './nuevo-vehiculo/nuevoVehiculo.page';

let ELEMENT_DATA:any[] = [
  {
    id:1,
    vehiculos:[{
      id_vehiculo:2,
      placa:"cds789",
      motor:"asdas",
      chasis:"chasis",
      modelo:"123",
      fecha_matricula:"2020/02/20",
      pasajeros:10,
      pasajeros_sentados:5,
      pasajeros_pie:5,
      peso_seco:123,
      peso_bruto:1235,
      catidad_puertas:2,
      marca:"asdas",
      linea:"12334"
    },{
      id_vehiculo:3,
      placa:"ciu789",
      motor:"dfgas",
      chasis:"chdfgdfs",
      modelo:"1345345",
      fecha_matricula:"2020/02/20",
      pasajeros:10,
      pasajeros_sentados:5,
      pasajeros_pie:5,
      peso_seco:123,
      peso_bruto:1235,
      catidad_puertas:2,
      marca:"asdas",
      linea:"12334"
    }]
  },  
  {
    id:2,
    vehiculos:[{
      id_vehiculo:0,
      placa:"cds789",
      motor:"agjghjs",
      chasis:"chasis",
      modelo:"123",
      fecha_matricula:"2020/02/20",
      pasajeros:10,
      pasajeros_sentados:5,
      pasajeros_pie:5,
      peso_seco:123,
      peso_bruto:1235,
      catidad_puertas:2,
      marca:"qweqweas",
      linea:"12334"
    },{
      id_vehiculo:1,
      placa:"casdu789",
      motor:"dfgas",
      chasis:"cghjhghdfgdfs",
      modelo:"1345345",
      fecha_matricula:"2020/02/20",
      pasajeros:10,
      pasajeros_sentados:5,
      pasajeros_pie:5,
      peso_seco:123,
      peso_bruto:1235,
      catidad_puertas:2,
      marca:"afdhggfdhas",
      linea:"12334"
    }]
  },
];

@Component({
  selector: 'app-vehiculosPage',
  templateUrl: 'vehiculos.page.html',
  styleUrls: ['vehiculos.page.scss']
})
export class VehiculosPage {

  dataSource;
  id_empresa:Number;
  

  constructor(public route:ActivatedRoute, public modalController: ModalController ) {
    this.dataSource = [];
    this.route.params.subscribe((params: any) => {
      if (params['id_empresa']) {
        this.id_empresa = Number.parseInt(params['id_empresa']);
        this.consultarVehiculos();
      }
      
    });
    

  }

  consultarVehiculos(){
    let vehiculos = ELEMENT_DATA.filter(e=>e.id==this.id_empresa);
    if (vehiculos.length<=0)
      return;
    this.dataSource = vehiculos[0]["vehiculos"];
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
        self.dataSource.push(datos.data.vehiculo);
    });
    return await modal.present();
  }
}

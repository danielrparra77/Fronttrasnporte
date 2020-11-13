import { Component } from '@angular/core';
import { NavParams, ModalController  } from '@ionic/angular';

@Component({
  selector: 'app-nuevoVehiculoPage',
  templateUrl: 'nuevoVehiculo.page.html',
  styleUrls: ['nuevoVehiculo.page.scss']
})
export class NuevoVehiculoPage {

  vehiculo:any = {
  };
  DocTypes:any=[
    {tipo:"CC"},
    {tipo:"CE"},
    {tipo:"NIT"},
    {tipo:"PAS"},
    {tipo:"TI"},
  ];

  constructor( public navParams: NavParams,
    public viewCtrl: ModalController) {
    this.vehiculo = navParams.get("vehiculo");
  }

  enviarVehiculo() {
    let evento = this.vehiculo.id_vehiculo?"UPDATE":"CREATE";
    this.viewCtrl.dismiss({evento,vehiculo:this.vehiculo});
  }
}

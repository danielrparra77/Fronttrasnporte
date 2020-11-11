import { Component } from '@angular/core';
import { NavParams, ModalController  } from '@ionic/angular';

@Component({
  selector: 'app-NuevoConductorPage',
  templateUrl: 'nuevoConductor.page.html',
  styleUrls: ['nuevoConductor.page.scss']
})
export class NuevoConductorPage {

  conductor:any = {
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
    this.conductor = navParams.get("conductor");
  }

  enviarVehiculo() {
    let evento = this.conductor.id?"UPDATE":"CREATE";
    this.viewCtrl.dismiss({evento,conductor:this.conductor});
  }
}

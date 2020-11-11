import { Component } from '@angular/core';
import { NavParams, ModalController  } from '@ionic/angular';

@Component({
  selector: 'app-nuevaEmpresaPage',
  templateUrl: 'nuevaEmpresa.page.html',
  styleUrls: ['nuevaEmpresa.page.scss']
})
export class nuevaEmpresaPage {

  empresa:any = {
    contacto:{},
    representante:{}
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
    this.empresa = navParams.get("empresa");
  }

  enviarEmpresa() {
    let evento = this.empresa.id?"UPDATE":"CREATE";
    this.viewCtrl.dismiss({evento,empresa:this.empresa});
  }
}

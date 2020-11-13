import { Component } from '@angular/core';
import { NavParams, ModalController  } from '@ionic/angular';
import { AjaxService } from '../../../providers/ajax/ajax.service';

@Component({
  selector: 'app-vehiculosEstrategico',
  templateUrl: 'vehiculosEstrategico.page.html',
  styleUrls: ['vehiculosEstrategico.page.scss']
})
export class VehiculosEstrategicoPage {

  vehiculosEstrategico:Array<any>;

  constructor( public navParams: NavParams,
    public viewCtrl: ModalController,
    private ajax: AjaxService) {
      this.consultarVehiculos();
  }

  consultarVehiculos() {
    this.ajax.post('api/consultarVehiculosEstrategico',{}).subscribe(data => {
      if (data.success) {
        this.vehiculosEstrategico = data.response.vehiculosEstrategico;
      }
    });
  }
}

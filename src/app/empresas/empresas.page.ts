import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { nuevaEmpresaPage } from './nueva-empresa/nuevaEmpresa.page';
import { AjaxService } from '../../providers/ajax/ajax.service';
import { VehiculosEstrategicoPage } from './vehiculos-estrategico/vehiculosEstrategico.page';



@Component({
  selector: 'app-empresasPage',
  templateUrl: 'empresas.page.html',
  styleUrls: ['empresas.page.scss']
})
export class EmpresasPage {

  displayedColumns: string[] = ['contacto', 'representante'];
  dataSource:any[];

  constructor(public modalController: ModalController, private ajax: AjaxService) {
    this.consultarEmpresas();
  }

  async consultarEmpresas(){
    let self = this;
    this.ajax.post('api/consultarEmpresas',{}).subscribe(data => {
      if (data.success) {
        self.dataSource = data.response.empresas;
      }
    });
  }

  async crearEmpresa(nuevaEmpresa){
    let self = this;
    this.ajax.post('api/crearEmpresa',{nuevaEmpresa}).subscribe(data => {
      if (data.success) {
        nuevaEmpresa.id = data.response.id;
        self.dataSource.push(nuevaEmpresa);
      }
    });
  }

  async nuevaEmpresa() {
    let self = this;
    const modal = await this.modalController.create({
      component: nuevaEmpresaPage,
      cssClass: 'nuevaEmpresa',
      componentProps: {
        empresa: {
          contacto:{},
          representante:{}
        }
      }
    });
    modal.onDidDismiss().then((datos)=>{
      if (datos.data.evento=='CREATE')
        return self.crearEmpresa(datos.data.empresa);
    });
    return await modal.present();
  }

  async consultarEstrategico() {
    let self = this;
    const modalEst = await this.modalController.create({
      component: VehiculosEstrategicoPage,
      cssClass: 'consultarVehiculos',
      componentProps: {
        id_empresa: {
        }
      }
    });
    return await modalEst.present();
  }
}

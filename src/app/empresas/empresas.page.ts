import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { nuevaEmpresaPage } from './nueva-empresa/nuevaEmpresa.page';


let ELEMENT_DATA:any[] = [
  {
    id:1,
    contacto:{tipoId:"CC",numeroId:"1234567",nombre:"ALENXADER PEREZ", direccion:"CALLE FALSA 123", ciudad:"Bogota",departamento:"Bogota",pais:"Colombia",telefono:"1234567"},
    representante:{tipoId:"CC",numeroId:"1234567",nombre:"ALENXADER PEREZ", direccion:"CALLE FALSA 123", ciudad:"Bogota",departamento:"Bogota",pais:"Colombia",telefono:"1234567"}
  },  
  {
    id:2,
    contacto:{tipoId:"CC",numeroId:"9867543",nombre:"ANDREA TORRES", direccion:"CALLE FALSA 789", ciudad:"Bogota",departamento:"Bogota",pais:"Colombia",telefono:"1234567"},
    representante:{tipoId:"CC",numeroId:"9867543",nombre:"ANDREA TORRES", direccion:"CALLE FALSA 789", ciudad:"Bogota",departamento:"Bogota",pais:"Colombia",telefono:"1234567"}
  },
];

@Component({
  selector: 'app-empresasPage',
  templateUrl: 'empresas.page.html',
  styleUrls: ['empresas.page.scss']
})
export class EmpresasPage {

  displayedColumns: string[] = ['contacto', 'representante'];
  dataSource = ELEMENT_DATA;

  constructor(public modalController: ModalController) {}


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
        self.dataSource.push(datos.data.empresa);
    });
    return await modal.present();
  }

  irVehiculos(){
    
  }
}

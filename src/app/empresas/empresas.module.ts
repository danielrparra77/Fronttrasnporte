import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpresasPage } from './empresas.page';
import { VehiculosEstrategicoPage } from './vehiculos-estrategico/vehiculosEstrategico.page';
import { nuevaEmpresaPage } from './nueva-empresa/nuevaEmpresa.page';
import { MaterialModule } from '../material.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EmpresasPageRoutingModule } from './empresas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MaterialModule,
    EmpresasPageRoutingModule
  ],
  declarations: [EmpresasPage,
    VehiculosEstrategicoPage,
     nuevaEmpresaPage]
})
export class EmpresasPageModule {}

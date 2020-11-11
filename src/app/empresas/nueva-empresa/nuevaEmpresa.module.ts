import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { nuevaEmpresaPage } from './nuevaEmpresa.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { nuevaEmpresaPageRoutingModule } from './nuevaEmpresa-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    nuevaEmpresaPage,
    nuevaEmpresaPageRoutingModule
  ],
  declarations: [nuevaEmpresaPage]
})
export class EmpresasPageModule {}

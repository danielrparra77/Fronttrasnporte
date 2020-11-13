import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehiculosEstrategicoPage } from './vehiculosEstrategico.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { VehiculosEstrategicoPageRoutingModule } from './vehiculosEstrategico-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    VehiculosEstrategicoPage,
    VehiculosEstrategicoPageRoutingModule
  ],
  declarations: [VehiculosEstrategicoPage]
})
export class EmpresasPageModule {}

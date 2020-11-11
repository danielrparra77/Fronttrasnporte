import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehiculosPage } from './vehiculos.page';
import { NuevoVehiculoPage } from './nuevo-vehiculo/nuevoVehiculo.page';
import { MaterialModule } from '../material.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { VehiculosPageRoutingModule } from './vehiculos-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MaterialModule,
    VehiculosPageRoutingModule,
  ],
  declarations: [VehiculosPage,
    NuevoVehiculoPage]
})
export class VehiculosPageModule {}

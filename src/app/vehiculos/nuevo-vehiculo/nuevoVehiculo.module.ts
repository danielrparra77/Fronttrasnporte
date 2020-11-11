import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NuevoVehiculoPage } from './nuevoVehiculo.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { NuevoVehiculoPageRoutingModule } from './nuevoVehiculo-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    NuevoVehiculoPage,
    NuevoVehiculoPageRoutingModule
  ],
  declarations: [NuevoVehiculoPage]
})
export class NuevoVehiculoPageModule {}

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConductoresPage } from './conductores.page';
import { NuevoConductorPage } from './nuevo-conductor/nuevoConductor.page';
import { MaterialModule } from '../material.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ConductoresPageRoutingModule } from './conductores-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MaterialModule,
    ConductoresPageRoutingModule,
  ],
  declarations: [ConductoresPage,
    NuevoConductorPage]
})
export class ConductoresPageModule {}

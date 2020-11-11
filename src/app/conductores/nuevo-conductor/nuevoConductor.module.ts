import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NuevoConductorPage } from './nuevoConductor.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { NuevoConductorPageRoutingModule } from './nuevoConductor-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    NuevoConductorPage,
    NuevoConductorPageRoutingModule
  ],
  declarations: [NuevoConductorPage]
})
export class NuevoConductorPageModule {}

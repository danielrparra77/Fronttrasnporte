import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosEstrategicoPage } from './vehiculosEstrategico.page';

const routes: Routes = [
  {
    path: '',
    component: VehiculosEstrategicoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculosEstrategicoPageRoutingModule {}

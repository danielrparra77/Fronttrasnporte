import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoVehiculoPage } from './nuevoVehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoVehiculoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoVehiculoPageRoutingModule {}

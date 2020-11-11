import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosPage } from './vehiculos.page';

const routes: Routes = [
  {
    path: '',
    component: VehiculosPage,
  },
  { path: 'conductores/:id_vehiculo', 
  loadChildren: () => import('../conductores/conductores.module').then(m => m.ConductoresPageModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculosPageRoutingModule {}

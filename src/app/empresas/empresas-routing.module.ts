import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasPage } from './empresas.page';

const routes: Routes = [
  {
    path: '',
    component: EmpresasPage,
  },
  { path: 'vehiculos/:id_empresa', 
  loadChildren: () => import('../vehiculos/vehiculos.module').then(m => m.VehiculosPageModule)},
  { path: 'conductores/:id_vehiculo', 
  loadChildren: () => import('../conductores/conductores.module').then(m => m.ConductoresPageModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasPageRoutingModule {}

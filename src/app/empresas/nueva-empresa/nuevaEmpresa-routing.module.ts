import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { nuevaEmpresaPage } from './nuevaEmpresa.page';

const routes: Routes = [
  {
    path: '',
    component: nuevaEmpresaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class nuevaEmpresaPageRoutingModule {}

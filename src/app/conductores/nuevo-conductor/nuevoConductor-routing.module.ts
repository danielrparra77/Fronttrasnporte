import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoConductorPage } from './nuevoConductor.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoConductorPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoConductorPageRoutingModule {}

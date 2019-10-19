import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PRIVATE_ROUTES } from './private.routes';


const routes: Routes = [
  {path: '', children: PRIVATE_ROUTES}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivatesRoutingModule { }

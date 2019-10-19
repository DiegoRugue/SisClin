import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './main/views/login/login.component';

import { AuthGuard } from './main/core/guards/auth.guard';
import { NotFoundComponent } from './main/views/privates/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'narev',
    loadChildren: 'src/app/main/views/privates/privates.module#PrivatesModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: 'src/app/main/views/login/login.module#LoginModule'
  },
  { path: '**', redirectTo: 'narev/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

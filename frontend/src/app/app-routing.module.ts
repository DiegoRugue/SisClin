import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './main/views/login/login.component';
import { HomeComponent } from './main/views/home/home.component';
import { NotFoundComponent } from './main/views/not-found/not-found.component';

import { AuthGuard } from './main/core/guards/auth.guard';

const routes: Routes = [
  { path:'', component: HomeComponent, canActivate: [AuthGuard] },
  { path:'login', component: LoginComponent },
  { path:'**', component: NotFoundComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

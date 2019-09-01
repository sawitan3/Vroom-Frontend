import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './page/login-page/login-page.component';
import {RegisterPageComponent} from './page/register-page/register-page.component';
import {SuperAdminComponent} from './page/super-admin/super-admin.component';
import {AdminPageComponent} from './page/admin-page/admin-page.component';
import {CarPageComponent} from './page/car-page/car-page.component';
import {AdminGuard} from './guards/admin.guard';
import {AuthGuard} from './guards/auth.guard';
import {SuperAdminGuard} from './guards/super-admin.guard';
import {LoginGuard} from './guards/login.guard';

const routes: Routes = [
    {path: 'login', component: LoginPageComponent, canActivate: [LoginGuard]},
    {path: 'super-admin', component: SuperAdminComponent, canActivate: [AuthGuard, SuperAdminGuard]},
    {path: 'admin-page', component: AdminPageComponent, canActivate: [AuthGuard, AdminGuard]},
    {path: 'register', component: RegisterPageComponent, canActivate: [LoginGuard]},
    {path: 'list', component: CarPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

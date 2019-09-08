import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './page/login-page/login-page.component';
import {RegisterPageComponent} from './page/register-page/register-page.component';
import {SuperAdminComponent} from './page/super-admin/super-admin.component';
import {AdminPageComponent} from './page/admin-page/admin-page.component';
import {CarPageComponent} from './page/car-page/car-page.component';
import {MainPageComponent} from './page/main-page/main-page.component';

const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'list', component: CarPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'super-admin', component: SuperAdminComponent},
    {path: 'admin-page', component: AdminPageComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

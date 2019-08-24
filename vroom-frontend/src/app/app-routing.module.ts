import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './page/login-page/login-page.component';
import {Route, RouteMethods} from './model/routes';
import {SuperAdminComponent} from './page/super-admin/super-admin.component';

const routes: Routes = [
    {path: RouteMethods.withoutLeadingSlash(Route.Login), component: LoginPageComponent},
    {path: RouteMethods.withoutLeadingSlash(Route.SuperAdmin), component: SuperAdminComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

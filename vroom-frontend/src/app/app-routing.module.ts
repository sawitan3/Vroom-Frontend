import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './page/login-page/login-page.component';
import {Route, RouteMethods} from './model/routes';

const routes: Routes = [{path: RouteMethods.withoutLeadingSlash(Route.Login), component: LoginPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

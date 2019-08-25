import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginPageComponent} from './page/login-page/login-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SuperAdminComponent } from './page/super-admin/super-admin.component';
import {TokenInterceptor} from './interceptors/auth';
import { AdminListComponent } from './page/super-admin/admin-list/admin-list.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { CreateNewAdminComponent } from './page/super-admin/create-new-admin/create-new-admin.component';
import {ModalBodyDirective, ModalWrapperComponent} from './component/modal-wrapper/modal-wrapper.component';
import { AdminPageComponent } from './page/admin-page/admin-page.component';
import { CustomerContainerComponent } from './container/customer-container/customer-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavbarComponent,
    SuperAdminComponent,
    AdminListComponent,
    CustomerListComponent,
    CreateNewAdminComponent,
    ModalWrapperComponent,
    ModalBodyDirective,
    AdminPageComponent,
    CustomerContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [ModalWrapperComponent, CreateNewAdminComponent]
})
export class AppModule { }

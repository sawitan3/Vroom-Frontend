import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginPageComponent} from './page/login-page/login-page.component';
import { RegisterPageComponent } from './page/register-page/register-page.component';
import {CreditCardDirectivesModule} from 'angular-cc-library';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
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
import { CarCardComponent } from './component/car-card/car-card.component';
import { CarPageComponent } from './page/car-page/car-page.component';
import { CarsAdminComponent } from './page/admin-page/cars-admin/cars-admin.component';
import { CreateNewCarComponent } from './page/admin-page/create-new-car/create-new-car.component';
import { EditCarComponent } from './page/admin-page/edit-car/edit-car.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NavbarComponent,
    SuperAdminComponent,
    AdminListComponent,
    CustomerListComponent,
    CreateNewAdminComponent,
    ModalWrapperComponent,
    ModalBodyDirective,
    AdminPageComponent,
    CustomerContainerComponent,
    CarCardComponent,
    CarPageComponent,
    CarsAdminComponent,
    CreateNewCarComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CreditCardDirectivesModule,
    GooglePlaceModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [
      ModalWrapperComponent,
    CreateNewAdminComponent,
    CreateNewCarComponent,
    EditCarComponent
  ]
})
export class AppModule { }

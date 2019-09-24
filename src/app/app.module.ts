import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbDateAdapter, NgbDateNativeUTCAdapter, NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
import {MainPageComponent} from './page/main-page/main-page.component';
import { CarsAdminComponent } from './page/admin-page/cars-admin/cars-admin.component';
import { CreateNewCarComponent } from './page/admin-page/create-new-car/create-new-car.component';
import { EditCarComponent } from './page/admin-page/edit-car/edit-car.component';
import { LocationsAdminComponent } from './page/admin-page/locations-admin/locations-admin.component';
import { CreateNewLocationComponent } from './page/admin-page/create-new-location/create-new-location.component';
import { EditLocationComponent } from './page/admin-page/edit-location/edit-location.component';
import {AgmCoreModule} from '@agm/core';
import { ProfileContainerComponent } from './container/profile-container/profile-container.component';
import { CurrentUserComponent } from './page/current-user/current-user.component';
import {UserProfileComponent} from './component/user-profile/user-profile.component';
import { RoleEntryComponent } from './component/navbar/role-entry/role-entry.component';
import { BookingPageComponent } from './page/booking-page/booking-page.component';
import { BookingFormComponent } from './component/booking-form/booking-form.component';
import { CarDisplayPipe } from './pipes/car-display.pipe';
import { DatetimePickerComponent } from './component/datetime-picker/datetime-picker.component';
import { GenericMessageComponent } from './component/modal-wrapper/generic-message/generic-message.component';

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
    EditCarComponent,
    MainPageComponent,
    LocationsAdminComponent,
    CreateNewLocationComponent,
    EditLocationComponent,
    UserProfileComponent,
    ProfileContainerComponent,
    CurrentUserComponent,
    RoleEntryComponent,
    BookingPageComponent,
    BookingFormComponent,
    CarDisplayPipe,
    DatetimePickerComponent,
    GenericMessageComponent
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
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAAjrrOQE7VlYof8Bf2CHuOpaUU_LIcWCo'
    })
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
    EditCarComponent,
    CreateNewLocationComponent,
    EditLocationComponent
  ]
})
export class AppModule { }

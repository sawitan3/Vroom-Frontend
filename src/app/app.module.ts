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
import { BookingsAdminComponent } from './page/admin-page/bookings-admin/bookings-admin.component';
import { AdminBookingDetailsComponent } from './page/admin-page/admin-booking-details/admin-booking-details.component';
import { BookingPageComponent } from './page/booking-page/booking-page.component';
import { BookingFormComponent } from './component/booking-form/booking-form.component';
import { CarDisplayPipe } from './pipes/car-display.pipe';
import { DatetimePickerComponent } from './component/datetime-picker/datetime-picker.component';
import { GenericMessageComponent } from './component/modal-wrapper/generic-message/generic-message.component';
import { UserBookingsComponent } from './page/user-bookings/user-bookings.component';
import { BookingListComponent } from './component/booking-list/booking-list.component';
import { EditBookingComponent } from './component/edit-booking/edit-booking.component';
import { DeleteBookingComponent } from './component/delete-booking/delete-booking.component';
import { BookingDisplayPipe } from './pipes/booking-display.pipe';
import { ReducedBookingDisplayPipe } from './pipes/reduced-booking-display.pipe';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
import { PaymentLoadingComponent } from './component/payment-loading/payment-loading.component';
import { PaymentScreenComponent } from './page/payment-screen/payment-screen.component';
import { PaymentStatusPipe } from './pipes/payment-status.pipe';
import { StartResetPasswordComponent } from './page/start-reset-password/start-reset-password.component';
import { DeleteAdminComponent } from './component/delete-admin/delete-admin.component';
import { ResetPasswordButtonComponent } from './component/reset-password-button/reset-password-button.component';
import { NewPasswordComponent } from './page/new-password/new-password.component';
import { ResetPasswordFormComponent } from './component/reset-password-form/reset-password-form.component';
import {NewPasswordGuard} from './guards/new-password.guard';

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
    BookingsAdminComponent,
    AdminBookingDetailsComponent,
    BookingPageComponent,
    BookingFormComponent,
    CarDisplayPipe,
    DatetimePickerComponent,
    GenericMessageComponent,
    UserBookingsComponent,
    BookingListComponent,
    EditBookingComponent,
    DeleteBookingComponent,
    BookingDisplayPipe,
    ReducedBookingDisplayPipe,
    EditProfileComponent,
    PaymentLoadingComponent,
    PaymentScreenComponent,
    PaymentStatusPipe,
    DeleteAdminComponent,
    StartResetPasswordComponent,
    ResetPasswordButtonComponent,
    NewPasswordComponent,
    ResetPasswordFormComponent
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
  }, ReducedBookingDisplayPipe],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalWrapperComponent,
    CreateNewAdminComponent,
    CreateNewCarComponent,
    EditCarComponent,
    CreateNewLocationComponent,
    EditLocationComponent,
    AdminBookingDetailsComponent,
    GenericMessageComponent,
    EditBookingComponent,
    DeleteBookingComponent,
    EditProfileComponent,
    DeleteAdminComponent
  ]
})
export class AppModule { }

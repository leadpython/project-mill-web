import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// SERVICES
import { AuthenticationService } from './services/authentication.service';
import { RegistrationService } from './services/registration.service';

// PAGES
import { AppComponent } from './app.component';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { VendorProfilePageComponent } from './pages/vendor-profile-page/vendor-profile-page.component';

// COMPONENT
import { DatePickerModule } from './components/datepicker/datepicker.module';

const appRoutes: Routes = [
  { path: '', component: AuthenticationPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'profile', component: VendorProfilePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationPageComponent,
    DashboardPageComponent,
    VendorProfilePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    DatePickerModule
  ],
  providers: [
    AuthenticationService,
    RegistrationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

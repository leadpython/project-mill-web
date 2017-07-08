import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// SERVICES
import { AuthenticationService } from './services/authentication.service';
import { HttpService } from './services/http.service';

import { AppComponent } from './app.component';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';

const appRoutes: Routes = [
  { path: '', component: AuthenticationPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthenticationService,
    HttpService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

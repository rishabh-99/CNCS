import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CeasersComponent } from './ceasers/ceasers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VigenereComponent } from './vigenere/vigenere.component';
import { OtpComponent } from './otp/otp.component';
import { HillComponent } from './hill/hill.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    CeasersComponent,
    VigenereComponent,
    OtpComponent,
    HillComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

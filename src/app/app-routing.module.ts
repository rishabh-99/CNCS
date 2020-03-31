import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CeasersComponent } from './ceasers/ceasers.component';
import { VigenereComponent } from './vigenere/vigenere.component';
import { OtpComponent } from './otp/otp.component';
import { HillComponent } from './hill/hill.component';


const routes: Routes = [
  { path: '', redirectTo: '/ceasers', pathMatch: 'full'},
  { path: 'ceasers', component: CeasersComponent },
  { path: 'vigenere', component: VigenereComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'hill', component: HillComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

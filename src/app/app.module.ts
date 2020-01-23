import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignupComponent } from './pages/signup/signup.component';
import { OwnersDashboardComponent } from './pages/owners-dashboard/owners-dashboard.component';

//Firebase Init
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';

//Firebase Database Module
import { AngularFirestoreModule } from '@angular/fire/firestore';


//Material design

import { MaterialModule } from './material.module';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    OwnersDashboardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule, 
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

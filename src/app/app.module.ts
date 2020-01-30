import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignupComponent } from './pages/signup/signup.component';
import { OwnersDashboardComponent,DeleteVenueComponent } from './pages/owners-dashboard/owners-dashboard.component';

//Firebase Init
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';

//Firebase Database Module
import { AngularFirestoreModule } from '@angular/fire/firestore';


//Material design

import { MaterialModule } from './material.module';
import { AddVenueComponent } from './dialogs/add-venue/add-venue.component';
import { EditVenueComponent } from './dialogs/edit-venue/edit-venue.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    OwnersDashboardComponent,
    AddVenueComponent,
    EditVenueComponent,
    DeleteVenueComponent 
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule, 
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports:[
  ],
  entryComponents:[
    AddVenueComponent,
    DeleteVenueComponent,
    EditVenueComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

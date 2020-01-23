import { Component } from '@angular/core';

//Angular Forms
import { FormBuilder, Validators } from '@angular/forms';

//Angular fire
import { AngularFirestore } from '@angular/fire/firestore';

//Anguar Material Toast
import {MatSnackBar} from '@angular/material/snack-bar';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent  {
  checkoutForm: any;
  // item: any;
  // private itemDoc: AngularFirestoreDocument<any>;

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private afs : AngularFirestore
   ) {

    //RXJS Reactive Forms
    this.checkoutForm = this.formBuilder.group({
      fullName: ['',Validators.compose([Validators.required])],
      UserName: ['',Validators.compose([Validators.required])],
      contactNum: ['',Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.pattern('[a-z0-9.@]*')])],
      address: ['',Validators.compose([Validators.required])]

    });
    // this.item = this.afs.doc('VenueOwner/JUQ3LPtGZwSW4hxGRUvH').valueChanges().subscribe(s=>{
    //   console.log('s',s);
    // });
   }

   //On Submit Button
   onSubmit(customerData) {
    this.afs.collection('VenueOwner').add({
     fullName: customerData.fullName,
     UserName: customerData.UserName,
     contactNum: customerData.contactNum,
     email: customerData.email,
     address: customerData.address,
     venues:[{}],
     userID: ""
    }).then(snapshot=>{
      this.afs.doc('VenueOwner/'+snapshot.id).update({
        userID: snapshot.id
      }).then(()=>{
        this._snackBar.open("Success!",'OK', {
          duration: 4000,
        });
      })
    });

    this.checkoutForm.reset();  //Reset 
  }


}

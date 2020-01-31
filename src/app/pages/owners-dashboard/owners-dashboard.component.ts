import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddVenueComponent} from '../../dialogs/add-venue/add-venue.component';
import { EditVenueComponent } from '../../dialogs/edit-venue/edit-venue.component';


//AngularFire
import { AngularFirestore, AngularFirestoreDocument, } from '@angular/fire/firestore';

import { Observable } from 'rxjs';   //RXJS Observables


//Anguar Material Toast
import {MatSnackBar} from '@angular/material/snack-bar';

/***
 * 
 * 
 * Interface for Venue Element
 * 
 *    name: string;
 *     position: number;
 *     location: string; 
 *     id: string;
 *     venueType: string;
 * 
 * 
 */


export interface VenueElement {
  name: string;
  position: number;
  location: string; 
  // id: string;
  venueType: string;
}
// const ELEMENT_DATA: VenueElement[] = [
//   {position: 1,id:'234234',name: 'Expert Wedding', location: 'Karachi', type: 'H'},
//   {position: 2,id:'234234', name: 'Expert Mehndi', location: 'Lahore', type: 'He'},
//   {position: 3,id:'23423', name: 'Expert mayo', location:'Islamabad', type: 'Li'},
//   {position: 4,id:'234', name: 'bc', location:'Okara', type: 'Be'},
// ];  

@Component({
  selector: 'app-owners-dashboard',
  templateUrl: './owners-dashboard.component.html',
  styleUrls: ['./owners-dashboard.component.scss']
})
export class OwnersDashboardComponent implements OnInit{

    // name: string;
    // location: string;
    // type: string;
  


  displayedColumns: string[] = ['position','name', 'location', 'type','edit','delete'];
  dataSource:Observable<any>; //= ELEMENT_DATA;  
  action: any;
  private itemDoc: AngularFirestoreDocument<VenueElement>;
  item: Observable<VenueElement>;
  userId:string;
  param:Observable<any>
  venues:any = [];

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private afs : AngularFirestore,
    private activeRoute: ActivatedRoute

  ) { 

   
    // collection.subscribe((value)=>{
        //   this.dataSource = value;
        //   console.log('collection',value);
        // }) 
    // this.itemDoc = afs.doc<VenueElement>('venues/HXS6ztoKbOvTrioCNYFG');
    // this.item = this.itemDoc.valueChanges();
  }

  /**
   * Query Parameters we get all data from Query param
   * 
   * We Will add the params to firebase to perform query
   * 
   * Query:
   * 
   *   SELECT * FROM venues WHERE ownerID == `${userId}`
   * 
   */
  
  ngOnInit(){
          this.activeRoute.params.subscribe(param=>{
          this.userId = param['id'];
          let collection = this.afs.collection('venues',ref=>ref.where('ownerId','==',this.userId)).valueChanges();
          this.dataSource = collection; 
          this.afs.doc('VenueOwner/'+this.userId).valueChanges().subscribe(((data:any)=>{
              this.venues = data.venues;
           }));
        });

  }

  /**
   * Add a New Venue
   * 
   * This Query will be equal to :
   * 
   * INSERT INTO venues(name,location,ownerId,VenueID) VALUES (value1, value2, value3);
   * 
   */

  openDialog(): void {
    const dialogRef = this.dialog.open(AddVenueComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(data => {
      if(!data) return;
      this.afs.collection('venues').add({
        name: data.name,
        location: data.location,
        venueType: data.venueType,
        ownerId:  this.userId,   
        VenueID: ""
       }).then(snapshot=>{
         this.afs.doc('venues/'+snapshot.id).update({
          VenueID: snapshot.id
         }).then(()=>{
        let vArray =  new Promise(resolve=>{
            this.venues.push({venueID:snapshot.id})
            resolve(true);
        });
          vArray.then((s)=>{
            this.afs.doc('VenueOwner/'+this.userId).update({
              venues: this.venues
            });
          });

           this._snackBar.open("Success!",'OK', {
             duration: 4000,
           });
         })
       });
      // console.log('The dialog was closed',data);
      // this.name = result;
    });
  }


  /**
   * 
   * @param EditDialog 
   *  
   * This function will perform the update function
   * 
   * This Query will be same as:
   * 
   *  UPDATE venues
   *  SET name = 'anyname', location= 'any location', venueType= 'Type'
   *  WHERE venueId = id;
   * 
   */

  editDialog(ele,id): void {
    const dialogRef = this.dialog.open(EditVenueComponent, {
      width: '350px',
      data: {name: ele.name, location: ele.location,venueType: ele.venueType}
    });

    dialogRef.afterClosed().subscribe(data => {
      // console.log('data',data);
      if(!data) return;
      this.itemDoc = this.afs.doc<VenueElement>('venues/'+id);
      this.itemDoc.update(data).then((sucess)=>{
        this._snackBar.open("Success!",'OK', {
          duration: 4000,
        });
      }).catch(e=>{
        console.log('find an error',e);
      });
    }); 
  }


/**
 * 
 * @param id
 * 
 *  This function is performing SQL like Delete Opertions
 *  The Below code will be equal to:
 * 
 *   DELETE FROM venues WHERE venueID='id';
 * 
 */

  deleteDialog(id): void {
    
    const dialogRef = this.dialog.open(DeleteVenueComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(data => {
      // console.log('The dialog was closed',id,data);
      if(!data) return;
        this.itemDoc = this.afs.doc<VenueElement>('venues/'+id);
        // this.item = this.itemDoc.valueChanges();
        this.itemDoc.delete().then((sucess)=>{
          // console.log('succes..!',sucess);
          const index = this.venues.map(e => e.venueID).indexOf(id);
                this.venues.splice(index,1);
                // console.log(index);
          this.afs.doc('VenueOwner/'+this.userId).update({
            venues: this.venues
          });
          // console.log('venues',this.venues);  
          this._snackBar.open("Success!",'OK', {
            duration: 4000,
          });
        }).catch(e=>{
          // console.log('find an error',e);
        });
      });    

      // this.name = result;
  
  }

}


/***
 * 
 *  Material Dialog Confirm Box
 * 
 * 
 */

 @Component({
  selector: 'app-delete-venue',
  styleUrls: ['./owners-dashboard.component.scss'],
  template: `
  <h2 mat-dialog-title>Delete </h2>
<mat-dialog-content>Are you sure?</mat-dialog-content>
<mat-dialog-actions>
  <button mat-button mat-dialog-close>No</button>
  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
  <button mat-button [mat-dialog-close]="true">Yes</button>
</mat-dialog-actions>
  `

})

export class DeleteVenueComponent {
  // public action:boolean = true;
  constructor(
    public dialogRef: MatDialogRef<DeleteVenueComponent>) {

    }
  
}

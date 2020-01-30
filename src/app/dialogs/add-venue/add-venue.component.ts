import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  name: string;
  location: string;
  venueType: string;
}

@Component({
  selector: 'app-add-venue',
  templateUrl: './add-venue.component.html',
  styleUrls: ['./add-venue.component.scss']
})
export class AddVenueComponent {

  constructor(
    public dialogRef: MatDialogRef<AddVenueComponent>,
    @Inject(MAT_DIALOG_DATA) public venue: DialogData) {
      this.venue = {
        name:'',
        location:'',
        venueType:''
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

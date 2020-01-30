import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';




export interface DialogData {
  name: string;
  location: string;
  venueType: string;
}

@Component({
  selector: 'app-edit-venue',
  templateUrl: './edit-venue.component.html',
  styleUrls: ['./edit-venue.component.scss']
})
export class EditVenueComponent {

  constructor(
    public dialogRef: MatDialogRef<EditVenueComponent>,
    @Inject(MAT_DIALOG_DATA) public venue: DialogData) {

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

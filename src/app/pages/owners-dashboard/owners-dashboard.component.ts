import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number; 
  id: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,id:'asdfsd',name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2,id:'asdfsd', name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3,id:'asdfsd', name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4,id:'asdfsd', name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5,id:'asdfsd', name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6,id:'asdfsd', name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7,id:'asdfsd', name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8,id:'asdfsd', name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9,id:'asdfsd', name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10,id:'asdfsd', name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];  

@Component({
  selector: 'app-owners-dashboard',
  templateUrl: './owners-dashboard.component.html',
  styleUrls: ['./owners-dashboard.component.scss']
})
export class OwnersDashboardComponent implements OnInit {

  displayedColumns: string[] = ['position','id' ,'name', 'weight', 'symbol','edit','delete'];
  dataSource = ELEMENT_DATA;  
  constructor() { }

  ngOnInit() {
    
  }

}

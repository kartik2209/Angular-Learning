import { Component, OnInit } from '@angular/core';
import {  MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-schoollist',
  templateUrl: './schoollist.component.html',
  styleUrls: ['./schoollist.component.scss']
})
export class SchoollistComponent implements OnInit {
  showFiller = false;
  constructor(public dialog:MatDialog,) { }
 
  ngOnInit(): void {
  
  }
  openDialog(model:any){
    this.dialog.open(model, {
      width: '250px',
    });
  }
}

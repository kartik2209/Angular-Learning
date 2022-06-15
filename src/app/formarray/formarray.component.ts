import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss']
})
export class FormarrayComponent implements OnInit {
  form!:FormGroup
  data!:FormArray
  index:any=[]
  constructor(public fb:FormBuilder,public dialog:MatDialog,public router:Router) { 
  }
  ngOnInit(): void {
    this.form=this.fb.group({
     username:new FormControl('',Validators.required),
     lastname:new FormControl('',Validators.required),
     data:new FormArray([this.anotherform()])
    })
  }
  anotherform():FormGroup{
    return this.fb.group({
      phone_no:new FormControl('',Validators.required),
     email:new FormControl('',Validators.required),
    })
  }
  anotherformcontrol(){
    return ( 
    this.data = this.form.get('data') as FormArray
    ).controls
  }
  addmore(){
    this.data = this.form.get('data') as FormArray
    this.data.push(this.anotherform())
  }
  submit(){
    console.log(this.form.value);
this.router.navigate(['/Stream'])
    
  }
  remove(i:number){
    this.data = this.form.get('data') as FormArray
     console.log(this.data.at(i).value);
this.data.removeAt(i);
}

}

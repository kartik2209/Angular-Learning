import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss']
})
export class FormarrayComponent implements OnInit {
  form!:FormGroup
  data!:FormArray
  index:any=[]
  // text='hello <b>welcome</b> '
  // image='<img src="assets/offee.png">'
  constructor(public fb:FormBuilder) { 
    // for(let i=0; i < 10;i++)
    // this.index.push(i)
    // console.log(this.index);
    
  }
  ngOnInit(): void {
    this.form=this.fb.group({
     Username:new FormControl('',Validators.required),
     data:new FormArray([this.anotherform()])
    })
  }
  anotherform():FormGroup{
    return this.fb.group({
      phone_no:new FormControl('',Validators.required),
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
    
  }
}

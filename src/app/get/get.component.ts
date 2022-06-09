import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {
user:any=[]
form!:FormGroup
submited:any
constructor(public http:HttpClient,public fb:FormBuilder,public router:Router) { }
ngOnInit(): void {
    this.form=this.fb.group({
      username:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      number:new FormControl('',Validators.required),
      checkbox:new FormControl('',Validators.required)
    })
  }
  savedata(){
    this.submited=true
    if (this.form.invalid) {
      alert('Enter Valid Details')
     console.log(this.form);

    }  
    else {
     console.log(this.form);
      
    }
  }
    public postsubjectdata(){
    let body={
     names:[
       {
name:'karik',id:'1'
     },
     {
       name:'ajet',id:'2'
     }
    ]
    }
   this.http.post('https://developmentapi.offee.in/streams',body).subscribe((res:any)=>{
     console.log(res);
   })

  }
 public getsubjectdata(){
  this.http.get('https://developmentapi.offee.in/streams').subscribe((res:any)=>{
  this.user=res
  console.log(res);
  
})
 }
 delete(data:any){
console.log(data);
 }
}
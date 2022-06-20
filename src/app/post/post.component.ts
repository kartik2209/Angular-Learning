import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  user:any=[]
form!:FormGroup
param:any
 getapi='http://192.168.0.173:3900/school/get'
 postapi='http://192.168.0.173:3900/school/add'
 updateapi='http://192.168.0.173:3900/school/update'

 submited:any
  constructor(public http:HttpClient,public fb:FormBuilder,public router:Router,public qp:ActivatedRoute) { 
this.createform()
    
  }
  ngOnInit(): void {
    this.getschoollist()
    this.qp.queryParams.subscribe((param:any)=>{
     this.param=param
    //  console.log(param);
    if (this.param.id) {
     this.getschoolbyID(this.param.id)
    }
    else {
      return
    }
    })
  }
  adddata(){
if (this.form.invalid) {
  alert('Fill all the details')
  return
} 
else {
console.log(this.form);
if (this.param.id) 
{
  let body=this.form.value 
  body.id=this.param.id
  this.http.post(this.updateapi,body).subscribe((res:any)=>{
    console.log(res);
  })
  this.getschoollist()
this.router.navigate(['/Post'])
this.createform()
} 
else {
  this.http.post(this.postapi,this.form.value).subscribe((res:any)=>{
    console.log(res);
  })
}
}
  }
getschoollist(){
  this.http.get(this.getapi).subscribe((res:any)=>{
    // console.log(res);
    this.user=res
  })
}
update(id:any){
  // console.log(id);
  this.router.navigate(['/Post'],{queryParams:{id:id}
  })
}
delete(i:any){
  console.log(this.form.value); 
}
getschoolbyID(id:any){
  this.http.get(this.getapi + '/' + id).subscribe((res:any)=>{
    console.log(res);
    this.form.patchValue(res)
  })
}
back(){
this.router.navigate(['/Post'])
this.createform()
}
createform(){
  this.form=this.fb.group({
    collegename:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    college_code:new FormControl('',Validators.required)
  })
}
}

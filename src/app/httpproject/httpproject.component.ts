import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { WebserviceService } from '../webservice.service';

@Component({
  selector: 'app-httpproject',
  templateUrl: './httpproject.component.html',
  styleUrls: ['./httpproject.component.scss']
})
export class HttpprojectComponent implements OnInit {
  form!:FormGroup
  submited:any
  users:any=[]
  id:any=[]
  name:any=[]
  date:any=[]
  loading:boolean= false
  constructor(public fb:FormBuilder,public http:HttpClient,public service:WebserviceService) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      FirstName:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
      LastName:new FormControl('',Validators.required),
      Email:new FormControl('',[Validators.required]),
      Phone_No:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      Conditon:new FormControl('',Validators.required),
    })
this.getStreamList()
  }
  Save(){
    this.submited = true
  if (this.form.invalid) {
    alert('Fill all the details')
  } 
  else {
  console.log(this.form);
  let body= {
    username : 'ajeet',
    password : 'ajeet@123'
  }
  this.service.login(body).subscribe((data:any)=>{

  })
  this.http.post('',body).subscribe(res=>{
    console.log(res);
  })
  }
  }
  public getStreamList()
  {
    this.http.get('https://developmentapi.offee.in/streams').subscribe((res:any)=>{
      console.log(res);
      this.id=res
    })
  }
}

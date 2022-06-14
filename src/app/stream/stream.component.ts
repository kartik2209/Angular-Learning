import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnInit {
form!:FormGroup
subject:any=[]
  constructor(public http:HttpClient,public fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group(
      {
      name:new FormControl('',Validators.required),
      id:new FormControl('',Validators.required)
    })
    this.getdata()
  }
  getdata(){
    this.http.get('https://developmentapi.offee.in/streams').subscribe((res:any)=>
    {
    console.log(res);
    this.subject=res
    })
  }
  searchdata(event:any)
  {
    this.http.get('https://developmentapi.offee.in/streams/' + event.target.value).subscribe((res:any)=>{
    console.log(res);
    this.form.patchValue(res['data'][0])
  })
  }
  update(){
    // this.form
  //  let body = this.form.value
  console.log(this.form);
console.log(this.form.value);
}
}

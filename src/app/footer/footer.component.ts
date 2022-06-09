import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
form!:FormGroup
user:any
toggle:any  =  false 
onclickedsubmit = false
password = false
showpass()
{
  this.password = ! this.password
}
  constructor(public http:HttpClient,public fb:FormBuilder) { }
  opentoggle()
  {
    this.toggle = !   this.toggle
  }

  submit()
  {
    this.onclickedsubmit = true
    console.log(this.form);
    console.log(this.form.value);
    
    let body = {
      data : this.form.value
    }
    this.http.post('http://localhost:4200/assets/app.json',body).subscribe()
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
      college_code : new FormControl('',Validators.required)
    })
    this.http.get('http://localhost:4200/assets/app.json').subscribe()
  }

}

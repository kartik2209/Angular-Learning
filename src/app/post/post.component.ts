import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  username=''
  lastname=''
  college_code=''
  constructor(public http:HttpClient) { }

  ngOnInit(): void {

  }
login(){
  
if (this.username=='' || this.lastname=='' || this.college_code=='') {
  alert('Enter Details')
} else {
  console.log('valid');
  var formdata =new  FormData;    
  formdata.append('action',"AUTHENTICATE_ADMIN");    
  formdata.append('username','');   
   formdata.append('password','');   
   formdata.append('college_code','');   
   formdata.append('fromportal','adminkjsc');
  this.http.post('https://developmentapi.offee.in/streams',formdata).subscribe(res=>{
    console.log(res
      );
    
  })
}
}
}

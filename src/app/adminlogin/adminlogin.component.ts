import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  username=''
  password=''
  college_code=''
  constructor(public http:HttpClient,public router:Router) { }

  ngOnInit(): void {
  }
public login(){
  if (this.username=='' || this.password=='' || this.college_code=='') {
    alert('Enter Valid Details')
  } else {
    console.log(this.username,this.password,this.college_code );
    var formdata =new  FormData;    
  formdata.append('action',"AUTHENTICATE_ADMIN");    
  formdata.append('username',this.username);   
  formdata.append('password',this.password);   
  formdata.append('college_code',this.college_code);   
  formdata.append('fromportal','adminkjsc');
  this.http.post('https://development.offee.in/services/interfaces/AdminLoginController.php',formdata).subscribe((res:any)=>{
    console.log(res);
    if (res['status']===-5) {
      alert('Enter Valid Details')
      return 
    } 
    else {
      console.log(res);
      alert('Success')
    this.router.navigate(['/Stream'])
      }
  })
  }
}
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cardincrease',
  templateUrl: './cardincrease.component.html',
  styleUrls: ['./cardincrease.component.scss']
})
export class CardincreaseComponent implements OnInit {
 maxHFromLeft:any
 maxHFromRight:any
 maxWFromleft:any
 maxWFromRight:any
 Object:any=[]
 username=''
 password=''
 college_code=''
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  this.http.get('assets/data.json').subscribe((data)=>{
    console.log(data);
    this.Object = data
  })
 
  }
  public login(){
    if (this.username == '' || this.password == '' || this.college_code == '') {
      alert('Enter valid Details')
    } else {
      console.log(this.username,this.password,this.college_code);
      let body={
          username:this.username,
          password:this.password,
          college:this.college_code
      }
      this.http.post('assets/data.json',body).subscribe((res:any)=>{
      })
    }
  }
}

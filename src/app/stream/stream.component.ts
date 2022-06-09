import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnInit {
  subject:any=[]
  index:any=[]
  course=''
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.coursedata()
  }
  
public coursedata(){
  this.http.get('https://developmentapi.offee.in/streams').subscribe((res:any)=>{
console.log(res);
this.subject=res
  })
}
searchdata(event:any){
if (event.target.value==0) {

}
else {
  this.http.get('https://developmentapi.offee.in/streams/'+ event.target.value).subscribe((res:any)=>{
    console.log(res);
  })
}
}
public update(id:any){
console.log(id);
let body={
  id:id,
  name:this.course
}
this.http.post('https://developmentapi.offee.in/streams/add',body).subscribe((res:any)=>{
  console.log(res);
})
}
}

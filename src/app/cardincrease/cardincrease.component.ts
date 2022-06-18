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
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  this.http.get('assets/data.json').subscribe((data)=>{
    console.log(data);
    this.Object = data
  })
  }
}

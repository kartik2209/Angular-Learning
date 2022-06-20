import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  streams:any = []
  params:any
  constructor(public fb:FormBuilder,public http:HttpClient,public router:Router,public ga:ActivatedRoute) { }

  ngOnInit(): void {
   this.getStreamdata()
    this.ga.queryParams.subscribe((param:any)=>{
      this.params  = param
      if (this.params.id) {
        this.http.get('https://developmentapi.offee.in/streams/'+ this.params.id ).subscribe(res=>{
          console.log(res);
        })
      }
 })
  }
  
  getStreamdata(){
    this.http.get('https://developmentapi.offee.in/streams').subscribe((res:any)=>{
    console.log(res);
    this.streams=res['data']
    
    })
  }
  update(id:any)
  {
     this.router.navigate(['/Color'],{queryParams : {id : id}})
  }
}

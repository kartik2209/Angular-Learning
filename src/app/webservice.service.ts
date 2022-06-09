import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  api = ''
  data:any = []
  login(id:any)
  {
    this.http.get('https://developmentapi.offee.in/streams').subscribe(res=>{
      console.log(res);
      this.data = res
    })
    return this.data
  }
  constructor(public http:HttpClient) { }
}

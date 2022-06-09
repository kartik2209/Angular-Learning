import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  colorname:any
color(colorname:any){
console.log(colorname);
this.colorname = colorname
}
// newpage(){
//   window.open("http://localhost:4200/Failed")
// }
// back(){
//  window.close()
// }
  constructor() { }

  ngOnInit(): void {
  }

}

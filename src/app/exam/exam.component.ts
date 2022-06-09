import { Component, OnInit } from '@angular/core';
import { state, style, transition, animate, trigger} from '@angular/animations'
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
  animations:[
trigger('rotated90',[
  state('start', style({ transform:'rotate(0)' })),
  state('end', style({ transform:'rotate(90deg)' })),
transition('start => end',animate('10ms ease-out')),
transition('end => start',animate('10ms ease-in'))
]),
trigger ('rotated180',[
  state('start', style({transform:'rotate(0)'})),
  state('end', style({transform:'rotate(180deg)'})),
transition('start => end',animate( '10ms ease-out')),
transition('end => start',animate( '10ms ease-in'))
]),
trigger ('rotated270',[
  state('start', style({transform:'rotate(0)'})),
  state('end', style({transform:'rotate(270deg)'})),
transition('start => end',animate( '10ms ease-out')),
transition('end => start',animate( '10ms ease-in'))
]),
trigger ('rotated360',[
  state('start', style({transform:'rotate(0)'})),
  state('end', style({transform:'rotate(360deg)'})),
transition('start => end',animate( '10ms ease-out')),
transition('end => start',animate( '10ms ease-in'))
])
  ]
})
export class ExamComponent implements OnInit {
isrotated90:any
isrotated180:any
isrotated270:any
isrotated360:any
// scale:number=1;
index:any =[]
currentimage:any= 0
hide:any
question:any=[
 {
  que:'What is  python-----?',
  img:'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
  mark:'1',
},
{
 que:'When is java ----?',
 img:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
 mark:'2',
},
{
  que:'When is html ----?',
  img:'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
  mark:'3',
 },
 {
  que:'When is html ----?',
  mark:'4',
 }
]
next(){
  if ( this.currentimage < this.question.length -1) {
   this.currentimage = this.currentimage+1
  }
  else
  {
    return
  }
}
pre(){
  if ( this.currentimage > 0) {
  this.currentimage = this.currentimage-1
   }
   else
   {
     return
   }
}
zoom:boolean = false;
zoomOut(){
  this.zoom = false; 
}
zoomIn(){
  this.zoom= true;
}
imgzoom(){
  if (this.zoom==true) {
    return '800'
  } 
  else {
    return 
  }
}
show(){
  if (this.hide="true") {
      this.hide= !this.hide
  } else {
    this.hide="none"
  }
}
rotated90() {
  this.isrotated90= this.isrotated90 === 'end' ? 'start' : 'end';
} 
rotated180() {
  this.isrotated180 = this.isrotated180 === 'end' ? 'start' : 'end';
}
rotated270() {
  this.isrotated270 = this.isrotated270 === 'end' ? 'start' : 'end';
}
rotated360() {
  this.isrotated360 = this.isrotated360 === 'end' ? 'start' : 'end';
}
  constructor() { }

  ngOnInit(): void {
 for (let i = 0; i < 100; i++) {
      this.index.push(i)
 }
 console.log(this.index);
 
  }

}

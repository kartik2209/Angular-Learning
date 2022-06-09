import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!:FormGroup
  submited:any
  shows='hello'+' welcome';
  show():any{
    return this.shows;
  }
  firstname='Xyz'
  lastname='Abc'
  getFirstname(){
     'hello'
  }
  getLastname(){
    'welcome'
  }
  max(first:number,second:number):any{
return Math.max(first,second);
  }
  imageurl='assets/offee.png'
  me=[
    {
      No:'1',
       Name:
       { 
        name1 :'Kartik',
        name2 :'soni'
        }
  },
  {
    No:'2',
     Name:
     { 
      name1 :'',
      name2 :'soni'
      }
},
{
  No:'3',
   Name:
   { 
    name1 :'Kartik',
    name2 :''
    }
},
]
color='green'
clickcount=0
click(){
  this.clickcount--
}
clickme(){
  this.clickcount++
}
value=""
name(event:any){
  this.value=(event.target as HTMLInputElement).value;
} 
vale=""
mane(name:any){
  this.vale=name.value;
}
fname=""
delete(){
  this.fname="";
}
namechanged(arg:any){
  console.log("namechanged"+arg.target.value);
  console.log(arg);
}
countrychanged(arg:any){
  console.log("countrychanged"+arg.target.value);
  console.log(arg);
  
}
countries:any=[
  {
    name:'kartik'
  },
  {
    name:'kartik1'
  },  
  {
    name:'kartik2'
  }
]
display:boolean=false;
check(arg:any){
console.log(arg);
this.display=arg.target.checked
}
user:any=[
  {
    text:'Start'
 },
  {
   text:'Welcome to mumbai'
},
{
  text:'I live in mumbai'
}, 
{
  text:'Thanks for watching'
},
]
currenttext=0
pre(){
if (this.currenttext==0) {
  return
} else {
  this.currenttext=this.currenttext-1
}
}
next(){
if (this.currenttext==this.user.length-1) {
  return
} else {
  this.currenttext=this.currenttext+1
  
}
}
users:any=[
  {
   name:'Kartik', midname:'Xyz', surname:'Abc'
},
{
  name:'Kartik', midname:'Xyz', surname:'Abc'
},
{
  name:'Kartik', midname:'Xyz', surname:'Abc'
},
{
  name:'Kartik', midname:'Xyz', surname:'Abc'
},
]

//   index:any = [];
//  uname:any
// pwd:any
// clg:any
// submit()
// {
//   if ((this.uname =="" || this.pwd =="" || this.clg =="") || (this.uname ==null || this.pwd ==null || this.clg ==null) || (this.uname ==undefined || this.pwd ==undefined || this.clg ==undefined) ) {
//     alert('Fill all the details')
//     console.log(this.uname);
//     console.log(this.pwd);
//     console.log(this.clg);
//   }
//    else {
//     console.log(this.uname);
//     console.log(this.pwd);
//     console.log(this.clg);
   
    
//   }
// }
current=0
index:any=[]
array:any=[
  {
    images:'assets/paymentfailed.gif',values:'Kartik'
},
{
  images:'assets/studies.gif',values:'Kartik'
},
{
  images:'assets/animation_500_l3phfkof.gif',values:'Kartik'
}
]
pres(){
if (this.current == 0) {
  return
} 
else {
  this.current=this.current -1
}
}
nexts(){
  if (this.current==this.array.length -1) {
return
  } 
  else {
 this.current=this.current +1
  }
}
Save(){
  this.submited = true
if (this.form.invalid) {
  alert('Fill all the details')
} 
else {
console.log(this.form);
}
}
text:any
texts:any=[]
add(){
  this.texts.push({names:this.text})
}
 constructor(public router:Router,public fb:FormBuilder) {
  }

  ngOnInit(): void {
    // for (let i = 0; i < 100; i++) {
    //     this.index.push(i)
    // }
    // console.log(this.index);
    this.form=this.fb.group({
      FirstName:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
      LastName:new FormControl('',Validators.required),
      Email:new FormControl('',[Validators.required]),
      Phone_No:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      Conditon:new FormControl('',Validators.required),
    })
  }

}

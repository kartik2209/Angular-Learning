import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
  sidebar:any=false
  form!:FormGroup
  chapterarray!:FormArray
  topicarray!:FormArray
  subtopicarray!:FormArray
  object:any=[]
  open(){
    this.sidebar= !this.sidebar
  }
  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      chapterarray:new FormArray([])
    })
  }
  // Chapter array
  chapterform():FormGroup{
return this.fb.group({
  chapter:new FormControl('',Validators.required),
  topicarray:new FormArray([])
})
  }
chapterformcontrol(){
  return(this.chapterarray = this.form.get('chapterarray') as FormArray).controls
}
addchapter(){
  this.chapterarray=this.form.get('chapterarray') as FormArray
  this.chapterarray.push(this.chapterform())
}
deletechapter(i:any){
  console.log(this.form);
  this.chapterarray.removeAt(i)
}
  // Topic array
    topicform():FormGroup{
      return this.fb.group({
        topic:new FormControl('',Validators.required),
        subtopicarray:new FormArray([])
      })
    }
    anotherformcontrol(i:any){
      this.chapterarray = this.form.get('chapterarray') as FormArray
      return(this.topicarray= this.chapterarray.at(i).get('topicarray') as FormArray).controls
    }
    addtopic(i:any){
      this.chapterarray = this.form.get('chapterarray') as FormArray
      this.topicarray= this.chapterarray.at(i).get('topicarray') as FormArray
      this.topicarray.push(this.topicform())
    }
    deletetopic(i:number,j:any){
      this.chapterarray = this.form.get('chapterarray') as FormArray
      this.topicarray= this.chapterarray.at(i).get('topicarray') as FormArray
      this.topicarray.removeAt(j)
    }
      // Sub topic array
     subtopicform():FormGroup{
      return this.fb.group({
        sub_topic:new FormControl('',Validators.required)
      })
    }
    anotherformcontrols(i:any,j:any){
      this.chapterarray = this.form.get('chapterarray') as FormArray
      this.topicarray= this.chapterarray.at(i).get('topicarray') as FormArray
      return(this.subtopicarray = this.topicarray.at(j).get('subtopicarray') as  FormArray).controls
      
    }
    addsubtopic(i:any,j:any){
      this.chapterarray = this.form.get('chapterarray') as FormArray
      this.topicarray= this.chapterarray.at(i).get('topicarray') as FormArray
      this.subtopicarray = this.topicarray.at(j).get('subtopicarray') as FormArray
      this.subtopicarray.push(this.subtopicform())
      console.log(this.form.value);
    }
    deletesubtopic(i:any,j:any,k:number){
      this.chapterarray = this.form.get('chapterarray') as FormArray
      this.topicarray= this.chapterarray.at(i).get('topicarray') as FormArray
      this.subtopicarray = this.topicarray.at(j).get('subtopicarray') as FormArray
      this.subtopicarray.removeAt(k)
    }
  
}

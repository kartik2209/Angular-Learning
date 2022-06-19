import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-arrayinarray',
  templateUrl: './arrayinarray.component.html',
  styleUrls: ['./arrayinarray.component.scss']
})
export class ArrayinarrayComponent implements OnInit {
form!:FormGroup
chapterarray!:FormArray
topicarray!:FormArray
subtopicarray!:FormArray
  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      chapterarray:new FormArray([this.chapterform()])
    })
  }
  //   Chapter Array
  chapterform():FormGroup{
    return this.fb.group({
      chapter:new FormControl('',Validators.required),
      topicarray:new FormArray([this.topicform()])
    })
  }
  chapterformcontrol()
  {
      return (this.chapterarray=this.form.get('chapterarray') as FormArray).controls
  }
  chapteradd()
  {
    this.chapterarray=this.form.get('chapterarray') as FormArray
    this.chapterarray.push(this.chapterform())
  }
  chapterremove(i:any)
  {
    console.log(this.form);
    this.chapterarray.removeAt(i)
  }
   //   Topic Array 
  topicform():FormGroup{
    return this.fb.group({
      topic:new FormControl('',Validators.required),
      subtopicarray:new FormArray([this.subtopicform()])
    })
  }
  topicformcontrol(i:any)
  {
    this.chapterarray=this.form.get('chapterarray') as FormArray
    return(this.topicarray=this.chapterarray.at(i).get('topicarray') as FormArray).controls
  }
  topicadd(i:any)
  {
    this.chapterarray=this.form.get('chapterarray') as FormArray
    this.topicarray=this.chapterarray.at(i).get('topicarray') as FormArray
    this.topicarray.push(this.topicform())
  }
  topicremove(i:any,j:any)
  {
    this.chapterarray=this.form.get('chapterarray') as FormArray
    this.topicarray=this.chapterarray.at(i).get('topicarray') as FormArray
    this.topicarray.removeAt(j)
  }
  // Sub Topic Array
  subtopicform():FormGroup{
    return this.fb.group({
      subtopic:new FormControl('',Validators.required)
    })
  }
  subtopicformcontrol(i:any,j:any){
    this.chapterarray=this.form.get('chapterarray') as FormArray
    this.topicarray=this.chapterarray.at(i).get('topicarray') as FormArray
    return (this.subtopicarray=this.topicarray.at(j).get('subtopicarray') as FormArray).controls
  }
  subtopicadd(i:any,j:any){
    this.chapterarray=this.form.get('chapterarray') as FormArray
    this.topicarray=this.chapterarray.at(i).get('topicarray') as FormArray
    this.subtopicarray=this.topicarray.at(j).get('subtopicarray') as FormArray
    this.subtopicarray.push(this.subtopicform())
  }
  subtopicremove(i:any,j:any,k:any){
    console.log(this.form);
    this.chapterarray=this.form.get('chapterarray') as FormArray
    this.topicarray=this.chapterarray.at(i).get('topicarray') as FormArray
    this.subtopicarray=this.topicarray.at(j).get('subtopicarray') as FormArray
    this.subtopicarray.removeAt(k)
  }
  submit(){
    console.log(this.form.value);
  }
 }

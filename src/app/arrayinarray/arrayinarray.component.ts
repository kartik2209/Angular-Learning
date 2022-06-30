import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-arrayinarray',
  templateUrl: './arrayinarray.component.html',
  styleUrls: ['./arrayinarray.component.scss']
})
export class ArrayinarrayComponent implements OnInit {
  form!: FormGroup
  chapterarray!: FormArray
  topicarray!: FormArray
  subtopicarray!: FormArray
  constructor(public fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      chapterarray: new FormArray([this.chapterform()])
    })
  }
  //   Chapter Array
  chapterform(): FormGroup {
    return this.fb.group({
      chapter: new FormControl('', Validators.required),
      topicarray: new FormArray([this.topicform()])
    })
  }
  chapterformcontrol() {
    return (this.chapterarray = this.form.get('chapterarray') as FormArray).controls
  }
  chapteradd(model: any) {
    this.chapterarray = this.form.get('chapterarray') as FormArray
    this.chapterarray.push(this.chapterform())
    this.dialog.open(model, {
      width: '800px',
      height: '100%',
      maxHeight: '90%'

    });
  }
  chapterremove(i: any) {
    console.log(this.form);
    this.chapterarray.removeAt(i)
  }
  //   Topic Array
  topicform(): FormGroup {
    return this.fb.group({
      topic: new FormControl('', Validators.required),
      subtopicarray: new FormArray([this.subtopicform()])
    })
  }
  topicformcontrol(i: any) {
    this.chapterarray = this.form.get('chapterarray') as FormArray
    return (this.topicarray = this.chapterarray.at(i).get('topicarray') as FormArray).controls
  }
  topicadd(i: any) {
    this.chapterarray = this.form.get('chapterarray') as FormArray
    this.topicarray = this.chapterarray.at(i).get('topicarray') as FormArray
    this.topicarray.push(this.topicform())
  }
  topicremove(i: any, j: any) {
    this.chapterarray = this.form.get('chapterarray') as FormArray
    this.topicarray = this.chapterarray.at(i).get('topicarray') as FormArray
    this.topicarray.removeAt(j)
  }
  // Sub Topic Array
  subtopicform(): FormGroup {
    return this.fb.group({
      subtopic: new FormControl('', Validators.required)
    })
  }
  subtopicformcontrol(i: any, j: any) {
    this.chapterarray = this.form.get('chapterarray') as FormArray
    this.topicarray = this.chapterarray.at(i).get('topicarray') as FormArray
    return (this.subtopicarray = this.topicarray.at(j).get('subtopicarray') as FormArray).controls
  }
  subtopicadd(i: any, j: any) {
    this.chapterarray = this.form.get('chapterarray') as FormArray
    this.topicarray = this.chapterarray.at(i).get('topicarray') as FormArray
    this.subtopicarray = this.topicarray.at(j).get('subtopicarray') as FormArray
    this.subtopicarray.push(this.subtopicform())
  }
  subtopicremove(i: any, j: any, k: any) {
    console.log(this.form);
    this.chapterarray = this.form.get('chapterarray') as FormArray
    this.topicarray = this.chapterarray.at(i).get('topicarray') as FormArray
    this.subtopicarray = this.topicarray.at(j).get('subtopicarray') as FormArray
    this.subtopicarray.removeAt(k)
  }
  submit() {
    console.log(this.form.value);
  }
  save(i: any, chapterdata: any) {
    if (this.validation(chapterdata)) {
      alert('valid')
      console.log(this.form.value);

    }
    else {
      alert(`Please fill all the values`)
    }
  }

  validation(chapterdata: any) {
    let valid: any = Boolean
    let chapter = chapterdata.get('chapter')?.value
    this.topicarray = chapterdata.get('topicarray') as FormArray
    for (let j = 0; j < this.topicarray.length; j++) {
      let topic = this.topicarray.at(j).get('topic')?.value
      this.subtopicarray = this.topicarray.at(j).get('subtopicarray') as FormArray
      for (let k = 0; k < this.subtopicarray.length; k++) {
        let subtopic = this.subtopicarray.at(j).get('subtopic')?.value
        if (chapter !== "" || topic !== "" || subtopic !== "") {
          valid = true
        }
        else {
          return valid = false
        }
      }
    }
    return valid
  }

}

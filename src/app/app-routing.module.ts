import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ExamComponent } from './exam/exam.component';
import { ColorComponent } from './color/color.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { HttpprojectComponent } from './httpproject/httpproject.component';
import { PostComponent } from './post/post.component';
import { GetComponent } from './get/get.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { StreamComponent } from './stream/stream.component';

const routes: Routes = [
  {
path:'',redirectTo:'Httpproject',pathMatch:'full'
},
  {path:'Login',component:LoginComponent},
  {path:'Exam',component:ExamComponent},
  {path:'Color',component:ColorComponent},
  {path:'Formarray',component:FormarrayComponent},
  {path:'Httpproject',component:HttpprojectComponent},
  {path:'Post',component:PostComponent},
  {path:'Get',component:GetComponent},
  {path:'Adminlogin',component: AdminloginComponent},
  {path:'Stream',component: StreamComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

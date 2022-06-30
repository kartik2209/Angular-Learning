import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ExamComponent } from './exam/exam.component';
import { ColorComponent } from './color/color.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { HttpprojectComponent } from './httpproject/httpproject.component';
import { PostComponent } from './post/post.component';
import { GetComponent } from './get/get.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { StreamComponent } from './stream/stream.component';
import { DesignComponent } from './design/design.component';
import { ArrayinarrayComponent } from './arrayinarray/arrayinarray.component';
import { CardincreaseComponent } from './cardincrease/cardincrease.component';
import { SchoollistComponent } from './schoollist/schoollist.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    FooterComponent,
    ExamComponent,
    ColorComponent,
    FormarrayComponent,
    HttpprojectComponent,
    PostComponent,
    GetComponent,
    AdminloginComponent,
    StreamComponent,
    DesignComponent,
    ArrayinarrayComponent,
    CardincreaseComponent,
    SchoollistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

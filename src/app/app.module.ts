import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ErrorHandler, InjectionToken } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {
  CommonModule,
  DatePipe
} from "@angular/common";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StudentModule } from "./student/student.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StudentModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }

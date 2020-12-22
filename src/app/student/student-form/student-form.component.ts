import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { student } from 'src/app/shared/models/student';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private Router: Router,
    private route: ActivatedRoute,
    public service: StudentService,
  ) {

  }

  StudentId: any;
  ngOnInit() {
    debugger;
    this.resetForm();
    this.StudentId = this.route.snapshot.params.id;
    if (this.StudentId) {
      this.getStudent();
    }
  }
  getStudent() {
    this.service.getStudent(this.StudentId).subscribe((data: student) => {
      debugger
      if (data) {
        this.service.formData.FirstName = data.FirstName;
        this.service.formData.LastName = data.LastName;
        this.service.formData.Class = data.Class;
        this.service.formData.Subject = data.Subject;
        this.service.formData.Marks = data.Marks;
        this.service.formData.Id = data.Id;
      }
    })
  }

  //reset
  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      Id: 0,
      FirstName: "",
      LastName: "",
      Class: "",
      Subject: "",
      Marks: "",
    };
  }

  //submit
  onSubmit(form: NgForm) {
    debugger;
    var model = this.service.formData;
    if ((!model.FirstName) || (!model.LastName) || (!model.Class) || (!model.Subject) || (!model.Marks)) {
      this.toastr.error('Fill the form first');
      return;
    }
    this.service.postStudent(model).subscribe((data: any) => {
      debugger
      if (data) {
        if (data.Action) {
          this.toastr.success(data.Message);
          this.Router.navigate(['/']);
        } else {
          this.toastr.error(data.Message);
        }
      }
    })
  }


}

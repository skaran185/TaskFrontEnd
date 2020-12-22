import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { student } from 'src/app/shared/models/student';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  Studetns: student[] = [];
  SearchString: any = "";
  FilterType: any = 0;
  constructor(
    private _toastr: ToastrService,
    private _StudentService: StudentService,
    private http: HttpClient,
    private _router: Router
  ) { }

  public dataList: any = [];
  selectedVal: string;
  count: number = 0;
  page: number = 1;
  perPage: number = 3;
  pagesToShow: number = 10;
  pageSize: any;

  ngOnInit() {
    this.page = 1;
    this.pageSize = 3;
    this.getAllStudents();
  }

  Filter(search, filterType) {
    debugger
    this.getAllStudents();
  }


  CreateFilter(search, filterType) {
    return {
      Page: this.page,
      PageSize: this.pageSize,
      Type: filterType,
      SearchString: search
    }
  }

  getAllStudents() {
    debugger
    var filter = this.CreateFilter(this.SearchString, this.FilterType);
    this._StudentService.getAllStudents(filter).subscribe((data: any) => {
      debugger
      this.Studetns = [];
      this.count = data.count;
      data = data.data;
      
      for (let index = 0; index < data.length; index++) {
        data[index].Subjects.forEach(element => {
          var std = {
            Id: data[index].Id,
            FirstName: "",
            LastName: "",
            Class: "",
            Subject: element.SubjectName,
            Marks: element.Marks,
          };
          if (this.Studetns.length <= 0 || (!this.Studetns.filter(v => v.Id == std.Id)[0])) {
            std = {
              Id: data[index].Id,
              FirstName: data[index].FirstName,
              LastName: data[index].LastName,
              Class: data[index].Class,
              Subject: element.SubjectName,
              Marks: element.Marks,
            };
          }
          this.Studetns.push(std);
        });
      }
    })
  }

  onEdit(id) {
    this._router.navigate(["/student/" + id]);
  }

  onDelete(id) {
    if (confirm('Are you sure you want to delete !')) {
      this._StudentService.deleteStudent(id).subscribe((data: any) => {
        debugger
        if (data) {
          if (data.Action) {
            this._toastr.success(data.Message);
            this.getAllStudents();
          }
          else {
            this._toastr.error(data.Message);
          }
        }
      })
    }
  }


  prevPage() {
    this.page = this.page - 1;
    this.getAllStudents();
  }

  nextPage() {
    this.page = this.page + 1;
    this.getAllStudents();
  }
  goToPage(event) {
    this.page = event;
    this.getAllStudents();
  }

}

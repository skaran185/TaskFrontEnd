import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from 'src/app/shared/services/common.service';
import { student } from '../models/student';

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    edit: student
    formData: student;
    list: student[];
    data = new CommonService();
    private url = this.data.getUri();

    constructor(private http: HttpClient) { }

    getAllStudents(filtration: any) {
        return this.http.post<any[]>(this.url + 'student/getAllStudents', filtration);
    }

    deleteStudent(id: number) {
        return this.http.delete(this.url + 'student/deleteStudent?id=' + id);
    }

    getStudent(id: number) {
        return this.http.get(this.url + 'student/GetStudent?id=' + id);
    }

    postStudent(model: student) {
        return this.http.post(this.url + 'student/postStudent',model)
    }


}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminPaginationModule } from '../shared/admin-pagination/admin-pagination.module';


const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'student', component: StudentFormComponent },
  { path: 'student/:id', component: StudentFormComponent },
]

@NgModule({
  declarations: [ListComponent, StudentFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    AdminPaginationModule
  ],
  exports: [
  ],
  entryComponents: [
    
  ]
})
export class StudentModule { }

import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { DepartamentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html'
})
export class DepartmentComponent implements OnInit {

  listDepartments: Department[] = [];

  constructor(
    private _departmentService: DepartamentService
  ) { }

  ngOnInit(): void {
    this._departmentService.listDepartment().subscribe(
      res=> {
        this.listDepartments = res;
      },
      err=> {
        console.log(err);        
      }
    );
  }

}

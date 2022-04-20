import { Component, OnInit } from '@angular/core';
import { ReqresServiceService } from 'src/app/services/reqres-service.service';
import { Employee } from 'src/app/interface/employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  constructor(private reqresService: ReqresServiceService) { }

  arrEmployees: Employee[] = [];

  ngOnInit(): void { 
    this.reqresService.getUsers().subscribe((response: any) => {
      console.log(response);
      this.arrEmployees = response.data;
    });
   }

  getEmployees() {
    this.reqresService.getUsers().subscribe((response: any) => {
      console.log(response);
      this.arrEmployees = response.data;
    });
  }    

  prueba() {
    console.log();
  }

}

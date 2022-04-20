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
  usersPage: number = 1;
  
  ngOnInit(): void {
    this.reqresService.getUsersByPage(this.usersPage).subscribe((response: any) => {
      console.log(response);
      this.arrEmployees = response.data;
    });
  }

  nextPage() {
    this.usersPage++;
    if (this.usersPage > 2) {
      this.usersPage = 1;   
    }
    this.reqresService.getUsersByPage(this.usersPage).subscribe((response: any) => {
      console.log(response);
      this.arrEmployees = response.data;      
    });
  }
}
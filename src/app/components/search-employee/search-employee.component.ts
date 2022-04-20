import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interface/employee';
import { ReqresServiceService } from 'src/app/services/reqres-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss']
})
export class SearchEmployeeComponent implements OnInit {

  employeeById: Employee| any;

  constructor(private reqresService: ReqresServiceService, private route:Router) {   }  

  ngOnInit(): void { }

  getUserById(id: number | any) {
    this.reqresService.getUser(id).subscribe((response: any) => {
      console.log(response);
      this.employeeById = response.data;
    });
  }
  deleteEmployee() {
    this.reqresService.deleteUser(this.employeeById).subscribe(res =>{     
      this.route.navigate(['/all-employees']);
      alert('Employee Deleted Successfully')
    })
  }
}
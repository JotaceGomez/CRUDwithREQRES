import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from 'src/app/interface/employee';
import { ReqresServiceService } from 'src/app/services/reqres-service.service';


@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss']
})
export class SearchEmployeeComponent implements OnInit {

  employeeById: Employee| any;

  constructor(private reqresService: ReqresServiceService) {   }  

  ngOnInit(): void {    }

  getUserById(id: number | any){
    this.reqresService.getUser(id).subscribe((response: any) => {
      console.log(response);
      this.employeeById = response.data;
    });
  }

}
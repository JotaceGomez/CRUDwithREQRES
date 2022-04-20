import { Component, OnInit } from '@angular/core';
import { ReqresServiceService } from 'src/app/services/reqres-service.service';
import { newEmployee } from 'src/app/interface/employee';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  newEmployee: newEmployee = {
    first_name: '',
    last_name: '',
    email: '',
  }

  constructor(private reqresService: ReqresServiceService) { }

  ngOnInit(): void {
  }

  createEmployee (newEmployee: newEmployee) {
    this.reqresService.createUser(newEmployee).subscribe((response: any) => {
      console.log(response);
      alert('Employee Created Successfully')
    });    
  }

}

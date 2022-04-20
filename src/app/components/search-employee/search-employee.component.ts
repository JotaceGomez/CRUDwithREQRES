import { Component, OnInit } from '@angular/core';
import { ReqresServiceService } from 'src/app/services/reqres-service.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss']
})
export class SearchEmployeeComponent implements OnInit {

  constructor(private reqresService: ReqresServiceService) { }  

  ngOnInit(): void {  }

  getUserbyid(id: number){
    this.reqresService.getUser(id).subscribe((response: any) => {
      console.log(response);
    });
  }

}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { SearchEmployeeComponent } from './components/search-employee/search-employee.component';

const routes: Routes = [
  { path: 'all-employees', component: EmployeesListComponent },
  { path: 'search-employee', component: SearchEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

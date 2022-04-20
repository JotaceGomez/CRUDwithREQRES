import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReqresServiceService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  getUser(id: number) {
    return this.http.get('https://reqres.in/api/users/' + id);
  }

  createUser(user: any) {
    return this.http.post('https://reqres.in/api/users', user);
  }

  updateUser(user: any) {
    return this.http.put('https://reqres.in/api/users/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete('https://reqres.in/api/users/' + id);
  }

  getUsersByPage(page: number) {
    return this.http.get('https://reqres.in/api/users?page=' + page);
  }

  getUsersBySearch(search: string) {
    return this.http.get('https://reqres.in/api/users?page=2&per_page=12&search=' + search);
  }

}

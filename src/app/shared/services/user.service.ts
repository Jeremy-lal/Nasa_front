import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static URL = 'http://localhost:8080/users/';
  currentUser: User;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(UserService.URL);
  }

  getUserById(id): Observable<User> {
    return this.http.get<User>(UserService.URL + id);
  }

  createUser(newUser: User) {
    return this.http.post(UserService.URL, newUser);
  }

  updateUser(updateUser: User) {
    return this.http.put(UserService.URL, updateUser);
  }

  deleteUser(id: number) {
    return this.http.delete(UserService.URL + id);
  }
}

import { Injectable,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Repository } from '../repository-class/repository';
import { User } from '../user-class/user';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
    apiUrl = 'http://api.github.com/users'
  constructor(private http:HttpClient) {}

  getUsers(){
    return this.http.get(`${this.apiUrl}?per_page=10`)
  }

  
   ngOnInit(){

   }
}

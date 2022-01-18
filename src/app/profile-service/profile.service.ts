import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Repository } from '../repository-class/repository';
import { User } from '../user-class/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user: User;
  repository: Repository;


  
  constructor(private http: HttpClient) {
    this.user = new User(","),
      this.repository = new Repository("")
  }
  profileRequest() {
    interface ApiResponse {
      user: string;
      login: string;
      repository: string;
      RepositoryName: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {
        if (response) {
          this.user.username = response.login
          this.repository.RepositoryName = response.RepositoryName
          
          resolve(response)
        }
      });
        (error:any) => {
          this.user.username = ","
          this.repository.RepositoryName = ","
          console.log(error)
          reject(error);

        }
      })

    return promise
  }


  ngOnInit() {

  }
}

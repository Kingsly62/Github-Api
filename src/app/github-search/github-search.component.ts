import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service/profile.service';
import { Repository } from '../repository-class/repository';
import { User } from '../user-class/user';
@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css'],
  providers:[ProfileService]
})
export class GithubSearchComponent implements OnInit {
    //  users!:User
     users:any;
     
     username:string =""
     repository:string =""
  constructor(private UserData:ProfileService){
      // this.UserData.profileRequest().subscribe(data=>{
      //   console.warn("data",data);
      //   this.users=data
      // })
      this.UserData.profileRequest()
      this.username = this.UserData.user.username
    }
  ngOnInit(): void {
  }
   
}
// private ProfileService:ProfileService



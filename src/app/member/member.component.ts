import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
     
     register = "Sign-Up"
  constructor() { }

  ngOnInit(): void {
  }

}

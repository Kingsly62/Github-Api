import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
   showmore:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
   moreContent(){
     this.showmore=!this.showmore;
   }
}

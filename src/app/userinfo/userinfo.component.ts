import { Component } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent {

  userId:any=""
  constructor(){
    this.userId=localStorage.getItem("userinfo")
  }

}

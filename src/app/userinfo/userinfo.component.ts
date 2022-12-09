import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent {

  userId:any=""
  constructor(private api:ApiService){
    this.userId=localStorage.getItem("userinfo")
    let data:any={"id":this.userId}
    
    this.api.userProfile(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.data=response
      }
    )

  }

  data:any=[]

}

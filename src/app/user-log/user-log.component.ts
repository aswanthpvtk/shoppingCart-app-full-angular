import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css']
})
export class UserLogComponent {

  
  email=""
  psw=""

  constructor(private api: ApiService, private route: Router) { }


  readValues=()=>
  {
    let data:any={"email":this.email,"psw":this.psw}
    console.log(data)

    this.api.ulogin(data).subscribe(
      (response: any) => {
        this.email = ""
        this.psw = ""
        if (response.status == "success"){
          let userId=response.userId
          console.log(userId)
          localStorage.setItem("userinfo",userId)
          
          this.route.navigate(["/uv"])
        } else {
          alert(response.message)
        }
      }
    )
  }
}




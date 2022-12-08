import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {

  name=""
  address=""
  phone=""
  email=""
  uname=""
  psw=""
  cpsw=""


constructor(private api:ApiService){}
  
  readValues=()=>
  {
    let data:any={"name":this.name,"address":this.address,"phone":this.phone,"email":this.email,"uname":this.uname,"psw":this.psw,"cpsw":this.cpsw}
    console.log(data)
    this.api.adduser(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status == "success") {

          alert("Successfully added")
  
          this.name=""
  
          this.address=""

          this.phone=""
          
          this.email=""
  
          this.uname=""
          this.psw=""
          this.cpsw=""
  
        } else {
  
          alert("Something went wrong")
  
        }
      }
    )
  }

}




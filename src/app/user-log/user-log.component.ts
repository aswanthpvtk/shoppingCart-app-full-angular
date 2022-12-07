import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css']
})
export class UserLogComponent {

  
  uname=""
  psw=""

  constructor(private route:Router){}


  readValues=()=>
  {
    let data:any={"aname":this.uname,"psw":this.psw}
    console.log(data)

    if ( this.uname=="admin" && this.psw=="12345")

    {
      this.route.navigate(['/uv'])
 
   }
 
   else {
 
     alert("invalid creditioanals")
 
   }
   
    
  }

}




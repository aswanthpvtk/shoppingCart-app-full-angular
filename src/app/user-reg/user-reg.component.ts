import { Component } from '@angular/core';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {

  name=""
  address=""
  ph=""
  email=""
  uname=""
  psw=""
  cpsw=""



  
  readValues=()=>
  {
    // let data:any={"name":this.name,"address":this.address,"ph":this.ph,"email":this.email,"uname":this.uname,"psw":this.psw,"cpsw":this.cpsw}
    // console.log(data)
    // this.api.addCourse(data).subscribe(
    //   (response:any)=>
    //   {
    //     console.log(response)
    //     if (response.status == "success") {

    //       alert("Successfully added")
  
    //       this.name=""
  
    //       this.address=""

    //       this.ph=""
          
    //       this.email=""
  
    //       this.uname=""
    //       this.psw=""
    //       this.cpsw=""
  
    //     } else {
  
    //       alert("Something went wrong")
  
    //     }
    //   }
    // )
  }

}




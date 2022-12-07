import { Component } from '@angular/core';

@Component({
  selector: 'app-pro-add',
  templateUrl: './pro-add.component.html',
  styleUrls: ['./pro-add.component.css']
})
export class ProAddComponent {
  pname=""
  category=""
  img=""
  description=""
  price=""
  



  // constructor(private api:ApiService){}

  readValues=()=>
  {
    // let data:any={"pname":this.pname,"img":this.img,"category":this.category,"description":this.description,"price":this.price}
    // console.log(data)
    // this.api.addCourse(data).subscribe(
    //   (response:any)=>
    //   {
    //     console.log(response)
    //     if (response.status == "success") {

    //       alert("Successfully added")
  
    //       this.pname=""
  
    //       this.img=""

    //       this.category=""
          
    //       this.description=""
  
    //       this.price=""
  
    //     } else {
  
    //       alert("Something went wrong")
  
    //     }
    //   }
    // )
  }

}

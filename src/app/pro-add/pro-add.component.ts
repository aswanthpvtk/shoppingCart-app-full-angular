import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pro-add',
  templateUrl: './pro-add.component.html',
  styleUrls: ['./pro-add.component.css']
})
export class ProAddComponent {
  pname=""
  img=""
  category=""
  description=""
  price=""
constructor(private api:ApiService){}
  readValue=()=>{
    let data:any={"pname":this.pname,"img":this.img,"category":this.category,"description":this.description,"price":this.price}
    console.log(data)
    this.api.addProduct(data).subscribe(
      (response:any)=>{
        if (response.status=="success") {
          alert("Product added successfully")

          this.pname=""
  
          this.img=""

          this.category=""
          
          this.description=""
  
          this.price=""
          
        } else {
          alert("something went wrong")
        }
      }
    )

    
  }
  

}
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-search',
  templateUrl: './add-search.component.html',
  styleUrls: ['./add-search.component.css']
})
export class AddSearchComponent {
pname=""
  constructor(private api:ApiService){}
  
  readValues=()=>{
    const data:any = {"pname":this.pname}
    this.api.searchData(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length) {
          this.searchData = response
          this.count = true
        } else {
          alert("Invalid Title")
          this.searchData = []
          this.count = false
        }
        
      }
    )
  }
  searchData:any = []
  count:any  = false
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-add-search',
  templateUrl: './add-search.component.html',
  styleUrls: ['./add-search.component.css']
})
export class AddSearchComponent {

  // constructor(private api:ApiService){}
  title=""
  readValues=()=>{
    // const data:any = {"title":this.title}
    // this.api.searchData(data).subscribe(
    //   (response:any)=>{
    //     console.log(response)
    //     if (response.length) {
    //       this.searchData = response
    //       this.count = true
    //     } else {
    //       alert("Invalid Title")
    //       this.searchData = []
    //       this.count = false
    //     }
        
    //   }
    // )
  }
  searchData:any = []
  count:any  = false
}

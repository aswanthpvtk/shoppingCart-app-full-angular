import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.css']
})
export class UsersearchComponent {

  pname=""
  search:any=[]
  constructor(private api:ApiService){

    api.fetchproduct().subscribe(
      (response)=>{
        this.search=response;
      }
    )
  }
  readValue=()=>{
    let data:any={"pname":this.pname}
    this.api.searchData(data).subscribe(
      (response:any)=>{
        this.search=response;
      }
    )

  }
data:any=[]
}

import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {


  pro = ""


  constructor(private api: ApiService) {
    api.fetchproduct().subscribe(
      (response) => {
        this.loading = false
        this.products = response
        console.log(response)
      }
    )
  }

  readValues = () => {
    let data: any = {
      "pro": this.pro
    }
    if (this.pro.length == 0) {
      this.searchData = []
    } else {
      this.api.searchData(data).subscribe(
        (response: any) => {
          if (response.length == 0) {
            this.searchData = []
          } else {
            this.searchData = response
          }
        }
      )
    }
  }

  
  searchData: any = []
  products: any = []
  loading: boolean = true
}

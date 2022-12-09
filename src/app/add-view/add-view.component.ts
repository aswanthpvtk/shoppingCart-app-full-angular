import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-view',
  templateUrl: './add-view.component.html',
  styleUrls: ['./add-view.component.css']
})
export class AddViewComponent {


  constructor(private api:ApiService)
 {
  api.fetchproduct().subscribe(


    (Response)=>
    {
      this.courses=Response;
    }
  )
 }

courses:any = []

}

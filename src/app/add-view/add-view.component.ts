import { Component } from '@angular/core';

@Component({
  selector: 'app-add-view',
  templateUrl: './add-view.component.html',
  styleUrls: ['./add-view.component.css']
})
export class AddViewComponent {


  // constructor(private api:ApiService)
//  {
//   api.fetchCourse().subscribe(


//     (Response)=>
//     {
//       this.courses=Response;
//     }
//   )
//  }

courses:any = []

}

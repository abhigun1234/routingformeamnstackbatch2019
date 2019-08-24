import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingdemofor';
  constructor(private route:Router)
  {


  }
  nevigateMe()
  {
   this.route.navigateByUrl('/home')

  }
}

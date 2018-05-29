
import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { PopularService } from '../popular.service';


@Component({
     selector: 'app-about',
    styleUrls: ['./about.component.scss'],
    templateUrl: './about.component.html',
  
})
export class AboutComponent  implements OnInit {
  images: Array<string>;


film:any;

  constructor( private _http: HttpClient, public _popular:PopularService) {
      this.latest();
   
  }

  ngOnInit() {
    
  }

 latest () {
     
 this._popular.getPop()
     .subscribe(( response: any )=> {
        this.film = response.results;
            console.log(this.film)
    
     })
  
}

}
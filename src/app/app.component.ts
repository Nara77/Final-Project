import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MovieService} from './movie.service';
import {HttpClient} from '@angular/common/http';
import { PopularService } from './popular.service';
import { LogoutService } from './logout.service';
import { UserService } from './user.service';




@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    name:any ="LogIN";

    
    constructor(private router: Router, private _http: HttpClient, public _popular:PopularService, public _logout:LogoutService, public _user:UserService) {
        
        
        
    }

    
     logOut (){
         this._user.isLoggedIn = false;
     return this.router.navigate([`/login`]);   }

 
    
// toggle(){
//     
//     console.log("out")
//     //return this.router.navigate([`/login`]);
//   }
    
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LogoutService } from '../logout.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   user: any = {
    email: "blabla1@gmail.com",
    password: "blabla1"
  };
  
  
  
  constructor( public _user: UserService, private router: Router, public _logout:LogoutService) {}

  ngOnInit() {}

  loginSubmit(){
     this._user.login(this.user)
     .subscribe(( response: any )=> {
        this._user.isLoggedIn = true;
      this.router.navigate([`/about`]);
      
      
    
        console.log(this.user,response)
         sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('userId', response.userId);
        
        
      })
  }
 
 
   

 }
 
 
 
  
 
 
 
 
  


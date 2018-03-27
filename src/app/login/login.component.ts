import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   user: any = {
    email: "blabla@gmail.com",
    password: "blabla1"
  };
  
  
  userA: any = {
  title: "aitanic",
  genre: "none"
  
};
  constructor( public _user: UserService, private router: Router) {}

  ngOnInit() {}

  loginSubmit(){
     this._user.login(this.user)
     .subscribe(( response: any )=> {
      this.router.navigate([`/movie`]);
    
        console.log(this.user,response)
         sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('userId', response.userId);
        
      })
  }
 
 

 }
 
 
 
  
 
 
 
 
  


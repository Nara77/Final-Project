import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

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
  constructor( public _user: UserService) {}

  ngOnInit() {}

  loginSubmit(){
     this._user.login(this.user)
   
     .subscribe(( response: any )=> {
    
    
    
       console.log(this.user,response)
      })
  }
  
      }
  


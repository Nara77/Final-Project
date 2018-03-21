import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

   user: any = {
   lastName: "blabla",
  firstName: "blabla",
  email: "blabla1@gmail.com",
 password: "blabla1"
  };
  constructor( public _register: RegisterService) {}

  ngOnInit() {}

  loginSubmit(){
     this._register.login(this.user)
     .subscribe(( response: any )=> {
        console.log(this.user,response)
      })
  }
  
 }
  
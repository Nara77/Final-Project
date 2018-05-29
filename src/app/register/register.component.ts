import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  constructor( public _register: RegisterService,private router: Router) {}

  ngOnInit() {}

  loginSubmit(){
     this._register.login(this.user)
     .subscribe(( response: any )=> {
          this.router.navigate([`/login`]);
        console.log(this.user,response)
      })
  }
  
 }
  
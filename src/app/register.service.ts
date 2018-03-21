import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {

 constructor(private _http: HttpClient) { }
 baseUrl: string = "http://nardos-spring-2018-phortonssf.c9users.io:8080/api/appUsers/";
 currentUser: any = {};
 login(user){
    return this._http.post(this.baseUrl + "login",user)
 }
 
  
}
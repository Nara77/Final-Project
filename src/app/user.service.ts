import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    
 constructor(private _http: HttpClient) { }
 
 
 baseUrl: string = "http://nardos-spring-2018-phortonssf.c9users.io:8080/api/appUsers/";
 userId: string = "5ab2b89f91b701287f229b0b"
 token : string ="?access_token=XrZgcuHJDksHCezBqckDlGfZsWVqAp3WxZcP0w4HXuGsLzjUQSux8hlDFYiSRWgr"

 currentUser: any = {};
 login(user){
    return this._http.post(this.baseUrl + "login",user)
 }
 
 
 relations (userA){
    let token = sessionStorage.getItem('token');
   let userId =  sessionStorage.getItem('userId');

console.log ( this.baseUrl + userId + "/movies" + token ,userA , "lalal" )
   return this._http.post(this.baseUrl + userId + "/movies"+ "?access_token=" + token ,userA)
   
  
 }
  
}


//http://nardos-spring-2018-phortonssf.c9users.io:8080/api/appUsers/5ab2b89f91b701287f229b0b/movies?access_token=XrZgcuHJDksHCezBqckDlGfZsWVqAp3WxZcP0w4HXuGsLzjUQSux8hlDFYiSRWgr

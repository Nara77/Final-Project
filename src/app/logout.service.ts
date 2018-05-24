import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class LogoutService {

  constructor(private router: Router) { }
  
  
  logouT(){
  return this.router.navigate([`/login`]);

}


}
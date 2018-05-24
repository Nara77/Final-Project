import { Component, OnInit,Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { UserService } from '../user.service';
import { LogoutService } from '../logout.service';
 

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent implements OnInit {
  
 
  
  
  @Input() favorites;
  

  constructor(private _movie: MovieService, public _user: UserService,  public _logout:LogoutService) { }


  ngOnInit() {
     this.favorites = this._movie.savedMovies;
  }


 logOut () {
       this._logout.logouT()
   }


}
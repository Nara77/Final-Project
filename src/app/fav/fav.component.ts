import { Component, OnInit,Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { UserService } from '../user.service';
 

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent implements OnInit {
  
  userA: any = {
  title: "aitanic",
  genre: "none"
  
};
  
  
  @Input() favorites;
  

  constructor(private _movie: MovieService, public _user: UserService) { }


  ngOnInit() {
     this.favorites = this._movie.savedMovies;
  }


 relationsSubmit(){
     this._user.relations(this.userA)
     .subscribe(( response: any )=> {
         console.log(this.userA,response)
         
         
         
     })


 }


}
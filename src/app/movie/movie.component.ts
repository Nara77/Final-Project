import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
   
 
data: any;
  savedMovie: any;
  movies: any;
  constructor(private _movies: MovieService) { }
  
  


ngOnInit() {
    // this._movie.getData("Fight Club").subscribe(data => console.log(data))
  }


 
 
  searchMovie(movies){
    this._movies.getData(movies)
    /*Subscribe method, the first argument is the function to invoke on
     succesful http response. The paremeter of that function is the response
     data. 
    */ 
     .subscribe( response => {
     //console.log(response)
     //I think response that might be more useful to remember in the future.
      this.movies = response;
       console.log(this.movies)
      })
  }
  
  /*  .subscribe pattern
  
  that param name does not matter, it is just the variable name for the response data
   .subscribe( param => )
  
  */
  
  
  
  selectMovie(saver){
    this.savedMovie = saver;
    console.log(this.savedMovie.title +" has been saved")
    console.log(this.savedMovie)
  }
}
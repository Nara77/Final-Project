import { Component, OnInit,Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  
  //fix html to match movieTitl
  movieTitle: any;
  data: any ;
  savedMovie: any;
  movies: any;
   results: object;
   searchTerm$ = new Subject<string>();
  
 
  constructor(private _movies: MovieService) {
      
      this.updateResults();
  }
  
  ngOnInit() {
    // this._movie.getData("Fight Club").subscribe(data => console.log(data))
  }

 updateResults() {
    this._movies.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results["results"];
      });
    console.log(this._movies.savedMovies);
  }
 
 
  searchMovie(movies){
     // console.log(this.movies)
   this._movies.getData(movies)
    /*Subscribe method, the first argument is the function to invoke on
     succesful http response. The paremeter of that function is the response
     data. 
    */ 
     .subscribe(( response: any )=> {
    
    
      this.movies = response.results;
       console.log(this.movies)
      })
  }
  


 selectMovie(saver){
    this.savedMovie = saver;
    this._movies.savedMovies.push(this.savedMovie);
    console.log(this.savedMovie.title +" has been saved")
    console.log(this.savedMovie)
    this.updateResults();
  }
  
}
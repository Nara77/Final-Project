import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class MovieService {
    


api: string = "?api_key=eac86952cd452099f635cdc4ef624edc";
//base_url: string = "https://api.themoviedb.org/3/movie/"; 
base_url: string="https://api.themoviedb.org/3/search/movie";
 savedMovies: any = [];
  options: string = "&page=1&include_adult=false;";
  
  
  
 constructor(private http: HttpClient) { }
 
 


//api: string= "api_key=eac86952cd452099f635cdc4ef624edc"
//&language=en-US&
//query=potter&page=1&include_adult=false
//"https://api.themoviedb.org/3/search/movie?api_key=…c4ef624edcquery=potter&page=1&include_adult=false"
//https://api.themoviedb.org/3/search/movie?api_key=eac86952cd452099f635cdc4ef624edc&language=en-US&query=potter&page=1&include_adult=false

 movies: any;
 
//getData(){
    // return this.http.get(this.base_url +this.api + "&query=" + this.movie + this.options)
      
 // }
  
  
 // api: string = "?api_key=7288c5fe043602f7e97a1f5c7f4b5495";
 // options: string = "&include_adult=false&language=en-US";
 // base_url: string = "https://api.themoviedb.org/3/search/movie";
 // savedMovies: any = [];
 // constructor(private http: HttpClient) {  }
 
 
 getData(query: string){
    return this.http.get(this.base_url + this.api + "&query=" +this.movies + this.options )
  }
  
  
  search(data) {
    return data.debounceTime(400)
     .distinctUntilChanged()
      .switchMap(term => this.searchEntries(data));
  }

  searchEntries(movie) {
    return this.http
        .get(this.base_url + this.api + this.movies + "&query=" + this.options );
  }

  
 

}

  





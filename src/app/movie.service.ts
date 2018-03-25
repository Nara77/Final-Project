import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';






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


// this needs to get a value from the input [(ngModel)] 
//movies: string = "name"; 
 
//getData(){
    // return this.http.get(this.base_url +this.api + "&query=" + this.movie + this.options)
      
 // }
  
  
 // api: string = "?api_key=7288c5fe043602f7e97a1f5c7f4b5495";
 // options: string = "&include_adult=false&language=en-US";
 // base_url: string = "https://api.themoviedb.org/3/search/movie";
 // savedMovies: any = [];
 // constructor(private http: HttpClient) {  }
 
 search(term) {
    return term.debounceTime(400)
     .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {

   
    return this.http.get(this.base_url +this.api + "&query=" + term + this.options);
  }

  
 
 
 getData(query:string){
  //Think what variable is bound to the search value from ngModel from the input
  
    return this.http.get(this.base_url +this.api + "&query=" + query + this.options );
  }
  
  
  
 

}

  



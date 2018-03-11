import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class MovieService {
    

 constructor(private http: HttpClient) { }
 
 api: string = "?api_key=eac86952cd452099f635cdc4ef624edc&";
//base_url: string = "https://api.themoviedb.org/3/movie/"; 
base_url: string="https://api.themoviedb.org/3/search/movie";
//api: string= "api_key=eac86952cd452099f635cdc4ef624edc"
//&language=en-US&
//query=potter&page=1&include_adult=false
//"https://api.themoviedb.org/3/search/movie?api_key=…c4ef624edcquery=potter&page=1&include_adult=false"
//https://api.themoviedb.org/3/search/movie?api_key=eac86952cd452099f635cdc4ef624edc&language=en-US&query=potter&page=1&include_adult=false


getData(){
     return this.http.get(this.base_url +this.api + "query=potter&page=1&include_adult=false")
      
  }

}

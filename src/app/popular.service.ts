import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class PopularService {
    
    
    
    //https://api.themoviedb.org/3/movie/popular?api_key=eac86952cd452099f635cdc4ef624edc&language=en-US&page=1

base_url:string = "https://api.themoviedb.org/3/movie/popular";

api: string = "?api_key=eac86952cd452099f635cdc4ef624edc" ;

options:string = "&language=en-US&page=1";

  constructor(private http: HttpClient) { }
  
  
  
  
  getPop ()  {
      
      return this.http.get(this.base_url + this.api + this.options)
      
      
      }

}

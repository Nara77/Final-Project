import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  data: any;
  constructor(private _movie: MovieService) { }

  ngOnInit() {
    this._movie.getData()
      .subscribe((data:any) => console.log(data.results))
  }

}
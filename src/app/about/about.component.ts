/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


@Component({
     selector: 'app-about',
    styleUrls: ['./about.component.scss'],
    templateUrl: './about.component.html',
  
})
export class AboutComponent  implements OnInit {
  images: Array<string>;

  constructor( private _http: HttpClient) {
   
  }

  ngOnInit() {
    
  }

 
  
}
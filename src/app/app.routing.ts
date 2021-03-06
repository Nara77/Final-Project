/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';

import { MovieComponent} from './movie/movie.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FavComponent } from './fav/fav.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},

    {path: 'about', component: AboutComponent},
    {path: 'movie', component: MovieComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'fav', component: FavComponent},
    
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);

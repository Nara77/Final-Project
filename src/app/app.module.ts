import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { UserService } from './user.service';
import { RegisterService } from './register.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from "./about/about.component";
import { MovieComponent } from './movie/movie.component';
import {HttpClientModule } from '@angular/common/http';
import { MovieService } from './movie.service';

import { FavComponent } from './fav/fav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
    
        MovieComponent,
        FavComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING,
        HttpClientModule,
        NgbModule.forRoot(),
    
    ],
    providers: [MovieService, UserService, RegisterService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

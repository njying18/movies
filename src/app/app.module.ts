import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './app.routes';

//CUSTOM PIPES
//import { SearchByPipe } from './pipes/search-by.pipe';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule ({
  declarations: [
    AppComponent,
    //SearchByPipe,
    NavbarComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,

    //ROUTING MODULE SHOULD BE LAST IN THIS LIST
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {SlideshowModule} from 'ng-simple-slideshow';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SportsComponent } from './components/sports/sports.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MapComponent } from './components/map/map.component';
import { WeatherComponent } from './components/home/weather/weather.component';
import { ImageSliderComponent } from './components/home/image-slider/image-slider.component';
import { NewsComponent } from './components/home/news/news.component';
import { ChatComponent } from './components/home/chat/chat.component';
import { SportNewsComponent } from './components/sports/sport-news/sport-news.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'sports', component:SportsComponent},
  {path:'about', component:AboutUsComponent},
  {path:'contact', component:ContactUsComponent},
  { path: 'viewSportNews/:id', component: SportNewsComponent},
  {path:'**', component:PageNotFoundComponent}
]

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SportsComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    FooterComponent,
    MapComponent,
    WeatherComponent,
    ImageSliderComponent,
    NewsComponent,
    ChatComponent,
    SportNewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SlickCarouselModule,
    IvyCarouselModule,
    SlideshowModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

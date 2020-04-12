import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SportsComponent } from './components/sports/sports.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'sports', component:SportsComponent},
  {path:'about', component:AboutUsComponent},
  {path:'contact', component:ContactUsComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
]

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
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

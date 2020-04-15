import { Component, OnInit } from '@angular/core';
import { LocationServiceService } from '../../../services/location-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  lat:Number;
  long:Number;

  weather: string = '';
  temp:string = '';
  city:string = '';
  iconurl:string = '';
  minTemp: string = '';
  feels: string = '';
  maxTemp: string = '';
  constructor(private http: HttpClient, private ls: LocationServiceService) { }

  ngOnInit(): void {
    this.ls.getPosition().then( pos =>{
      this.lat = pos.lat;
      this.long = pos.lng;

      this.getWeather(this.lat, this.long).subscribe( data =>{
        var cityData = data['list']['0'];
        this.temp = cityData.main.temp;
        this.city = cityData.name;
        this.feels = cityData.main.feels_like;
        this.minTemp = cityData.main.temp_min;
        this.maxTemp = cityData.main.temp_max
        this.weather = cityData.weather[0].description;
        this.iconurl = "http://openweathermap.org/img/w/" + cityData.weather[0].icon + ".png";
      })
    })
  }

  getWeather(lat, long){
    return this.http.get(`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${long}&cnt=1&units=imperial&appid=93569875f7547e50a2404d6915da926b`);
  }

}

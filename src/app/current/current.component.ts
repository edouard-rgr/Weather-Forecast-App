import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import 'rxjs/Rx';


import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  myWeather:CurrentWeather;


  constructor(private weatherservice:WeatherService) { }


  getCurrentData(city: string = 'Los Angeles', state: string='California', country: string = 'US') {
    this.weatherservice.getCurrentWeather(city, state, country).subscribe
    (data => {
      this.myWeather = new CurrentWeather(
        data.name,
        data.sys.country,
        data.main.temp,
        data.main.temp_min,
        data.main.temp_max,
        data.weather[0].icon,
        data.weather[0].description)

        console.log(this.myWeather)
      },
      (error) =>{
        'error'
      }
      );
  }


  onSubmit(weatherForm:NgForm){
    this.weatherservice.getCurrentWeatherByCity(weatherForm.value.city).subscribe
    (data => {
      this.myWeather = new CurrentWeather(
        data.name,
        data.sys.country,
        data.main.temp,
        data.main.temp_min,
        data.main.temp_max,
        data.weather[0].icon,
        data.weather[0].description)

      console.log(this.myWeather)
      console.log(weatherForm)
    },
    (error) =>{
      'error'
    }
    );
  }


  ngOnInit(): void {
    this.getCurrentData("Austin")

  }

}


/*

getCurrentData(city: string = 'New York') {
  this.weatherservice.getCurrentWeather(city).subscribe
    (data => {
      this.myWeather = data
      console.log(data)
    },
    (error) =>{
      'error'
    }
    );
}

onSubmit(weatherForm:NgForm){
  this.weatherservice.getCurrentWeather(weatherForm.value.city).subscribe
  (data => {
    this.myWeather = data
    console.log(data)
  },
  (error) =>{
    'error'
  }
  );
}


    public cityName:string;
    public countryName:string;
    public temp:number;
    public temp_min:number;
    public temp_max:number;
    public img:string;
    public description:string;

    this.cityName = data.name,
    this.countryName = data.sys.country,
    this.temp = data.main.temp,
    this.temp_min = data.main.temp_min,
    this.temp_max = data.main.temp_max,
    this.img = data.weather[0].icon,
    this.description = data.weather[0].description

 */



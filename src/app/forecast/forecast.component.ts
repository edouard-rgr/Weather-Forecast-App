import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  myWeather:CurrentWeather;


  constructor(private weatherservice:WeatherService) { }


  getForecastData(city: string = 'New York') {
    this.weatherservice.getForecastWeather(city).subscribe
      (data => {
        this.myWeather = data
        console.log(data)
      },
      (error) =>{
        'error'
      }
      );
  }



  ngOnInit(): void {
    this.getForecastData()

  }

}

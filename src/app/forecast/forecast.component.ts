import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import 'rxjs/Rx';


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

  onSubmit(weatherForm:NgForm){
    this.weatherservice.getForecastWeather(weatherForm.value.city).subscribe
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

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


  getCurrentData(city: string = 'New York') {
    this.weatherservice.getCurrentWeather(city).subscribe
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
    this.weatherservice.getCurrentWeather(weatherForm.value.city).subscribe
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


  ngOnInit(): void {
    this.getCurrentData()

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
 */



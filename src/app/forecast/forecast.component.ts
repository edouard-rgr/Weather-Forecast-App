import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import 'rxjs/Rx';


import { WeatherService } from '../weather.service';

import { Forecast } from '../forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  forecast:Forecast[] = [];
  forecastForm: FormGroup;


  constructor(private weatherservice:WeatherService) { }



/*
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
*/

onSubmit(){
  this.weatherservice.getForecastWeather(this.forecastForm.value.forecastCity).subscribe
    (data => {
      console.log(data);
      for(let i=0; i<data.list.length;i= i+8){
        const forecastWeather = new Forecast(data.city.name,
                                              data.list[i].weather[0].description,
                                              data.list[i].main.temp,
                                              data.list[i].dt_txt,
                                              data.list[i].weather[0].icon);
        // console.log(forecastWeather);
        this.forecast.push(forecastWeather);
      }
      console.log(this.forecast);
      return this.forecast;
    },
    (error) =>{
      'error'
    }
  );


}


  ngOnInit(): void {
    this.forecastForm = new FormGroup({
      forecastCity: new FormControl('Seattle')
    })
    console.log(this.forecastForm);

  }



}

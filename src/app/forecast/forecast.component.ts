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
  forecastList:Forecast;
  forecastForm: FormGroup;


  constructor(private weatherservice:WeatherService) { }

onSubmit(){
  this.weatherservice.getForecastWeatherByCity(this.forecastForm.value.forecastCity).subscribe
    (data => {
      for(let i=0; i<data.list.length;i= i+8){
        this.forecastList = new Forecast(
          data.city.name,
          data.list[i].weather[0].description,
          data.list[i].main.temp,
          data.list[i].dt_txt,
          data.list[i].weather[0].icon)

        console.log(data);
        //console.log(this.forecastList);
        this.forecast.push(this.forecastList);
      }
      console.log(this.forecast);
      console.log(this.forecastForm)
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


/*

    public cityName:string;
    public description:string;
    public temp:number;
    public date:string;
    public img:string;

    this.cityName = data.city.name;
    this.description = data.list[i].weather[0].description;
    this.temp = data.list[i].main.temp;
    this.date = data.list[i].dt_txt;
    this.img = data.list[i].weather[0].icon;

  */

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

  constructor(
    private weatherservice:WeatherService,
    ) { }


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


  ngOnInit(): void {
    this.getCurrentData()

  }

}









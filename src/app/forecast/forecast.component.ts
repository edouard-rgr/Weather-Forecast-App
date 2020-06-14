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

  //variable declaration
  forecast:Forecast[] = [];
  forecastList:Forecast;
  forecastForm: FormGroup;

  valeur: number;

  //list of keys associated with the values corresponding to the number of forecast days
  options = [
    {key:"8", label:"1 " },
    {key:"16", label:"2 " },
    {key:"24", label:"3 " },
    {key:"32", label:"4 " },
    {key:"40", label:"5 " },
  ]


  constructor(private weatherservice:WeatherService) { } //use of api data from the web service in the constructor



onSubmit(){ //function associated with our button
  this.weatherservice.getForecastWeatherByCity(this.forecastForm.value.forecastCity).subscribe //we use the web service with the value of the city name associated to our functions and we use subscribe
    (data => { //we're going to combine the data we're interested in
      for(let i=0; i<this.valeur;i= i+8){  //we make a loop in order to return the forecasts for different dates.
        this.forecastList = new Forecast( //we define a list of forecast values according to the imported class "Forecast"
          data.city.name,
          data.city.country,
          data.list[i].dt_txt,
          data.list[i].main.temp,
          data.list[i].main.temp_min,
          data.list[i].main.temp_max,
          data.list[i].weather[0].icon,
          data.list[i].weather[0].description)

        console.log(data); //display of data in the console
        //console.log(this.forecastList);
        this.forecast.push(this.forecastList); //we push our data list into a list variable
      }
      console.log(this.forecast); //display of forecast variable in the console
      console.log(this.forecastForm)
      return this.forecast; // we return our forecast variable
    },
    (error) =>{
      'error'
    }
  );


  this.valeur = this.forecastForm.get("nbForecast").value; //associates to a variable the number of forecast days to be inserted in our loop


}


  ngOnInit(): void {
    this.forecastForm = new FormGroup({
      forecastCity: new FormControl('Austin'), //sets the name of the city to a default value
      nbForecast: new FormControl(["40"]) //sets the number forecast days to a default value
    })

    console.log(this.forecastForm);

  }



}


/*

    public cityName:string;
    public countryName:string;
    public description:string;
    public temp:number;
    public date:string;
    public img:string;

    this.cityName = data.city.name;
    this.countryName = data.city.country:
    this.description = data.list[i].weather[0].description;
    this.temp = data.list[i].main.temp;
    this.date = data.list[i].dt_txt;
    this.img = data.list[i].weather[0].icon;

  */



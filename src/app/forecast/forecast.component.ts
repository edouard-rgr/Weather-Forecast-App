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

  valeur: number;

  options = [
    {key:"8", label:"1 " },
    {key:"16", label:"2 " },
    {key:"24", label:"3 " },
    {key:"32", label:"4 " },
    {key:"40", label:"5 " },
  ]


  constructor(private weatherservice:WeatherService) { }



onSubmit(){
  this.weatherservice.getForecastWeatherByCity(this.forecastForm.value.forecastCity).subscribe
    (data => {

      for(let i=0; i<this.valeur;i= i+8){
        this.forecastList = new Forecast(
          data.city.name,
          data.city.country,
          data.list[i].dt_txt,
          data.list[i].main.temp,
          data.list[i].main.temp_min,
          data.list[i].main.temp_max,
          data.list[i].weather[0].icon,
          data.list[i].weather[0].description)

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


  this.valeur = this.forecastForm.get("nbForecast").value;




}


  ngOnInit(): void {
    this.forecastForm = new FormGroup({
      forecastCity: new FormControl('Austin'),
      nbForecast: new FormControl(["40"])
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



    /*
radios = document.getElementsByName('nbForecast');
for(let i = 0; i < this.nbForecast.length; i++){
 if(this.nbForecast[i].checked){
 this.valeur = this.nbForecast[i].value;
 }
}

for (let j=0;j<3;j++) {
  if (document.forms.nbForecast[j].checked==true) {
    number = document.forms.nbForecast[j].value;
    Id = document.forms.nbForecast[j].id;
    m=j;
    select = document.getElementById("qt" );
    qt = select.options[select.selectedIndex].value;
    console.log("fruit=" + number + "            Id=" + Id + "           qt=" + qt);
    break;
  }
}
*/

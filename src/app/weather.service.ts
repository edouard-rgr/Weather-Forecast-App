import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders , HttpParams } from '@angular/common/http';

import 'rxjs/Rx';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


import { CurrentWeather } from './current-weather';
import { Forecast } from './forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  API_URL = 'https://api.openweathermap.org/data/2.5/';
  API_KEY = '23a4c647b115671db0944db06a982ad0';


  constructor(private http:HttpClient) { }

  getCurrentWeather(city: string, state:string, country:string) : Observable<CurrentWeather> {
    return this.http.get<CurrentWeather>(this.API_URL+'/weather?q=' + city +','+ state +','+ country +'&appid=' + this.API_KEY + '&units=imperial')}

  getForecastWeather(city: string, state:string, country:string) : Observable<Forecast> {
    return this.http.get<Forecast>(this.API_URL+'/forecast?q=' + city +','+ state +','+ country +'&appid=' + this.API_KEY + '&units=imperial')}


  getCurrentWeatherByCity(city: string) : Observable<CurrentWeather> {
    return this.http.get<CurrentWeather>(this.API_URL+'/weather?q=' + city +'&appid=' + this.API_KEY + '&units=imperial')}

  getForecastWeatherByCity(city: string) : Observable<Forecast> {
    return this.http.get<Forecast>(this.API_URL+'/forecast?q=' + city +'&appid=' + this.API_KEY + '&units=imperial')}

}



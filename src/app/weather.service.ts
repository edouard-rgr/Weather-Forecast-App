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


  API_URL = 'https://api.openweathermap.org/data/2.5/'; //URL of the api
  API_KEY = '23a4c647b115671db0944db06a982ad0'; //Key of the api


  constructor(private http:HttpClient) { } //use of the HTTPClient module in the constructor to perform http queries

  getCurrentWeather(city: string, state:string, country:string) : Observable<CurrentWeather> { //declaration of function and use of observable on CurrentWeather
    return this.http.get<CurrentWeather>(this.API_URL+'/weather?q=' + city +','+ state +','+ country +'&appid=' + this.API_KEY + '&units=imperial')} //http request

  getForecastWeather(city: string, state:string, country:string) : Observable<Forecast> { //declaration of function and use of observable on Forecast
    return this.http.get<Forecast>(this.API_URL+'/forecast?q=' + city +','+ state +','+ country +'&appid=' + this.API_KEY + '&units=imperial')} //http request


  getCurrentWeatherByCity(city: string) : Observable<CurrentWeather> { //declaration of function and use of observable on CurrentWeather
    return this.http.get<CurrentWeather>(this.API_URL+'/weather?q=' + city +'&appid=' + this.API_KEY + '&units=imperial')} //http request

  getForecastWeatherByCity(city: string) : Observable<Forecast> { //declaration of function and use of observable on Forecast
    return this.http.get<Forecast>(this.API_URL+'/forecast?q=' + city +'&appid=' + this.API_KEY + '&units=imperial')} //http request

}



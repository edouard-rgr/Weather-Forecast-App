export class CurrentWeather {

  constructor(public cityName:string,
    public countryName:string,
    public current_temp:number,
    public current_temp_min:number,
    public current_temp_max:number,
    public img:string,
    public current_description:string){}


  name : string;

  sys:{
    country: string;
  };

  main:{
    temp: number;
    temp_min: number;
    temp_max: number
  };

  weather:[{
    icon: string;
    description: string;
  }];

}

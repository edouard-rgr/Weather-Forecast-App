export class CurrentWeather {

  constructor(
    public current_city:string,
    public current_country:string,
    public current_temp:number,
    public current_temp_min:number,
    public current_temp_max:number,
    public current_icon:string,
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

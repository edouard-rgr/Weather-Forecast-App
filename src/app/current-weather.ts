export class CurrentWeather {

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

  /*
  coord: {
    lon: number;
    lat: number;
  };
  */
}

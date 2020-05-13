export class Forecast {

  constructor(
    public forecast_city:string,
    public forecast_country:string,
    public forecast_date:string,
    public forecast_temp:number,
    public forecast_temp_min:number,
    public forecast_temp_max:number,
    public forecast_icon:string,
    public forecast_description:string,){}


  city:{
    name: string;
    country: string;
  }

  list:[{

    dt_txt: string;

    main:{
      temp: number;
      temp_min: number;
      temp_max: number;
    };

    weather:[{
      icon: string;
      description: string;
    }];

  }];

}


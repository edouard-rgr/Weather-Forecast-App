export class Forecast {

  constructor(
    public forecast_city:string,
    public forecast_description:string,
    public forecast_temp:number,
    public forecast_date:string,
    public forecast_icon:string){}


  city:{
    name: string
  }

  list:[{

    dt_txt: string;

    main:{
      temp: number;
      temp_min: number;
      temp_max: number
    };

    weather:[{
      icon: string;
      description: string;
    }];

  }];

}


export class Forecast {

  constructor(public cityName:string,
    public forecast_description:string,
    public forecast_temp:number,
    public date:string,
    public img:string){}

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


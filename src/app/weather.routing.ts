import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';

const WEATHER_ROUTER:Routes = [ //routing constant declaring a path list for current weather and forecasts
  {path: '', component: CurrentComponent},
  {path: 'forecast', component: ForecastComponent},
]

export const weatherRouting:ModuleWithProviders = RouterModule.forRoot(WEATHER_ROUTER) //export of a constant that will allow routing

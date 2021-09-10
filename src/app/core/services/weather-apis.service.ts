
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Actions } from '../interfaces/actions';

import { ActionsService } from './actions.service';
import { TempAndIcon, Units } from '../interfaces/temp-and-icon';

@Injectable({
  providedIn: 'root'
})
export class WeatherApisService {

  private actions: Actions;

  private interval: number = 1000 * 60;
  public setActionRunnerFn: any;

  constructor(
    private actionsService: ActionsService,
    private http: HttpClient
  ) {
    this.actions = this.actionsService.constants;
  }

  initiateWeather = () => {
    setInterval(this.triggerActionRunner, this.interval);
    this.triggerActionRunner();
  };

  triggerActionRunner = () => {
    this.setActionRunnerFn(this.actions.TRIGGER_WEATHER, null);
  };

  getWeather = async (unit: Units) => {
    const url: string = `http://api.openweathermap.org/data/2.5/weather?id=4513409&units=${ unit }&appid=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`;
    const rawdata: any = await this.http.get<any>(url).toPromise();
    const data: TempAndIcon = {
      temp: rawdata.main.temp,
      icon: this.getIconUrl(rawdata.weather[0].icon),
      units: unit
    };
    this.setActionRunnerFn(this.actions.RECEIVED_WEATHER_DATA, data);
  };

  getIconUrl = (icon: string) => `http://openweathermap.org/img/wn/${ icon }@2x.png`;

}

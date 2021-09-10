
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { Actions } from '../interfaces/actions';
import { TempAndIcon, Units } from '../interfaces/temp-and-icon';
import { ActionsService } from './actions.service';

import { IconStateService } from './icon-state.service';
import { WeatherApisService } from './weather-apis.service';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private actions: Actions;

  public iconState: BehaviorSubject<boolean> = new BehaviorSubject(this.icon.initialState);

  public weatherData: Subject<TempAndIcon> = new Subject();

  private _weatherUnit: Units = 'imperial';
  public weatherUnit: BehaviorSubject<Units> = new BehaviorSubject(this._weatherUnit);

  private _spinner: boolean = false;
  public spinner: BehaviorSubject<boolean> = new BehaviorSubject(this._spinner);

  constructor(
    private actionsService: ActionsService,
    private icon: IconStateService,
    private weather: WeatherApisService
  ) {
    this.weather.setActionRunnerFn = this.processAction.bind(this);
    this.actions = this.actionsService.constants;
  }

  processAction = async (action: string, data: any) => {
    console.log(action, data);
    switch (true) {
      case (action === this.actions.CHANGE_WEATHER_UNIT):
        this._weatherUnit = data;
        this.weatherUnit.next(this._weatherUnit);
        break;

      case (action === this.actions.INITIATE_WEATHER):
        this.weather.initiateWeather();
        break;
      case (action === this.actions.TRIGGER_WEATHER):
        this.spinner.next(true);
        this.weather.getWeather(this._weatherUnit);
        break;
      case (action === this.actions.RECEIVED_WEATHER_DATA):
        this.weatherData.next(data);
        this.spinner.next(false);
        break;
        
      case (action === this.actions.TOGGLE_ICON):
        const newState = this.icon.toggleState(data);
        this.iconState.next(newState);
        break;
    }
  };
}

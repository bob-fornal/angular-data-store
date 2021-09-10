
import { Injectable } from '@angular/core';

import { Actions } from '../interfaces/actions';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constants: Actions = {
    CHANGE_WEATHER_UNIT: 'CHANGE_WEATHER_UNIT',
    
    INITIATE_WEATHER: 'INITIATE_WEATHER',
    TRIGGER_WEATHER: 'TRIGGER_WEATHER',
    RECEIVED_WEATHER_DATA: 'RECEIVED_WEATHER_DATA',

    TOGGLE_ICON: 'TOGGLE_ICON'
  };
  
}

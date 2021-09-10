
import { Component } from '@angular/core';
import { Actions } from 'src/app/core/interfaces/actions';
import { Units } from 'src/app/core/interfaces/temp-and-icon';
import { ActionsService } from 'src/app/core/services/actions.service';
import { DataStoreService } from 'src/app/core/services/data-store.service';

@Component({
  selector: 'weather-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent {

  actions: Actions;
  units: Units = 'imperial';

  constructor(
    private actionsService: ActionsService,
    private dataStore: DataStoreService
  ) {
    this.actions = this.actionsService.constants;
    this.dataStore.weatherUnit.subscribe((data: Units) => {
      this.units = data;
    });
  }

  unitChange = (value: Units) => {
    this.dataStore.processAction(this.actions.CHANGE_WEATHER_UNIT, value);
  };

}

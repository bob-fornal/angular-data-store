
import { Component } from '@angular/core';
import { TempAndIcon, Units } from 'src/app/core/interfaces/temp-and-icon';
import { DataStoreService } from 'src/app/core/services/data-store.service';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  temperature: number = -1;
  units: Units = 'imperial';

  constructor(
    private dataStore: DataStoreService
  ) {
    this.dataStore.weatherData.subscribe((data: TempAndIcon) => {
      this.temperature = data.temp;
      this.units = data.units;
    });
  }

}

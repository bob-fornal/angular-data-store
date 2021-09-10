
import { Component } from '@angular/core';

import { TempAndIcon } from 'src/app/core/interfaces/temp-and-icon';

import { DataStoreService } from 'src/app/core/services/data-store.service';

@Component({
  selector: 'weather-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  source: string = '';

  constructor(
    private dataStore: DataStoreService
  ) {
    this.dataStore.weatherData.subscribe((data: TempAndIcon) => {
      this.source = data.icon;
    });
  }

}

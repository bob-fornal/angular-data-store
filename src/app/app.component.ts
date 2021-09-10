
import { Component } from '@angular/core';
import { Actions } from './core/interfaces/actions';
import { TempAndIcon } from './core/interfaces/temp-and-icon';
import { ActionsService } from './core/services/actions.service';

import { DataStoreService } from './core/services/data-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  private actions: Actions;

  constructor(
    private actionService: ActionsService,
    private store: DataStoreService
  ) {
    this.actions = this.actionService.constants;
    this.store.processAction(this.actions.INITIATE_WEATHER, null);

    this.store.weatherData.subscribe((data: TempAndIcon) => {
      console.log(data);
    });
  }

}

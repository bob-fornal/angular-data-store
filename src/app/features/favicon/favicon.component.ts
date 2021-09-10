
import { Component } from '@angular/core';

import { Actions } from 'src/app/core/interfaces/actions';
import { ActionsService } from 'src/app/core/services/actions.service';

import { DataStoreService } from '../../core/services/data-store.service';

@Component({
  selector: 'favicon',
  templateUrl: './favicon.component.html',
  styleUrls: ['./favicon.component.scss']
})
export class FaviconComponent {

  actions: Actions;
  iconState: boolean = true;
  favIcon: HTMLLinkElement = document.querySelector('#appIcon')!;

  constructor(
    private actionsService: ActionsService,
    private dataStore: DataStoreService
  ) {
    this.actions = this.actionsService.constants;
    this.dataStore.iconState.subscribe((data: boolean) => {
      this.iconState = data;
      this.favIcon.href = (data === true) ? '/assets/icons/sunny.ico' : '/assets/icons/dark.ico';
    });
  }

  toggleFavicon = () => {
    this.dataStore.processAction(this.actions.TOGGLE_ICON, this.iconState);
  };

}

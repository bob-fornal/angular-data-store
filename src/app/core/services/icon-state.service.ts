import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconStateService {

  initialState: boolean = true;
  toggleState = (state: boolean) => !state;
}

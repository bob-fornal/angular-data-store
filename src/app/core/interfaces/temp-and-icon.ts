
export type Units = 'imperial' | 'metric';

export interface TempAndIcon {
  temp: number;
  icon: string;
  units: Units;
}

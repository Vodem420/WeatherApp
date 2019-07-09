export class Init {
  load() {
    if (localStorage.getItem('weather-items') === null || localStorage.getItem('weather-items') === undefined) {
      console.log('Weather items not found!!!');
    } else {
      console.log('Loading weatherItems..');
    }
  }
}

import { WeatherItem } from './body/weather/weatherInterface';

export const WEATHER_ITEMS: WeatherItem[] = [];

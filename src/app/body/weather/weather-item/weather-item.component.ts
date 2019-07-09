import { Component, OnInit, Input } from '@angular/core';
import { WeatherItem } from '../weatherInterface';
// import { WeatherItem } from './weatherInterface';

@Component({
  selector: 'app-weather-item',
  template: `<article class="weather-element">
    <div class="col-1"><h3>{{weatherItem.cityName}}</h3>
    <p class="info">{{ weatherItem.description }}</p></div>
        <div class="col-2">
            <span class="temperature">{{ weatherItem.temperature }}°C</span>
        </div>
    </article>    
  `,
  styleUrls: ['./weather-item.css'],
})

export class WeatherItemComponent {
  @Input('item') weatherItem: WeatherItem;
}

import { Component, OnInit, OnChanges} from '@angular/core';
import { WeatherItemsService } from '../services/weather-items.service';
import { WeatherItem } from './weatherInterface';
// import { WeatherItem } from './weatherInterface';

@Component({
  selector: 'app-weather-list',
  template: `
    <section class="weather-list">
      <app-weather-item *ngFor= "let weatheritem of weatheritems" [item]=weatheritem > </app-weather-item>
    </section>
  `,
  styleUrls: [ './weather-list.css' ],
  providers: [WeatherItemsService]
})

export class WeatherListComponent implements OnInit {
  public weatheritems: WeatherItem[];

  constructor(private weatherItemsService$: WeatherItemsService) {
    this.getWeatherItems();

  }

  getWeatherItems() {
    this.weatheritems = this.weatherItemsService$.getWeatherItem();
  }

  ngOnInit() {
    this.getWeatherItems();
  }

}

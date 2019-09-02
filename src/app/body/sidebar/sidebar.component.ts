import { Component, OnInit } from '@angular/core';
import { Profile } from './profile/profile';
import { ProfileService, WeatherItemsService } from './services/index';
import { WeatherItem } from '../weather/weatherInterface';

@Component({
  selector: 'app-sidebar',
  template: ``,
  styleUrls: ['./sidebar.css'],
  providers: [ProfileService, WeatherItemsService]
})

export class SideBarComponent implements OnInit {
}

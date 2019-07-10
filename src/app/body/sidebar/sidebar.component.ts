import { Component, OnInit } from '@angular/core';
import { Profile } from './profile/profile';
import { ProfileService, WeatherItemsService } from './services/index';
import { WeatherItem } from '../weather/weatherInterface';

@Component({
  selector: 'app-sidebar',
  template: `
    <div class="sideContent">
  <h2>Saved Profiles</h2>
        <div class="line"></div>
    <button class="save" (click) = "onSaveNew()">Save list to Profile</button>
        <div class="profiles">
    <article class="profile" *ngFor="let profile of profiles">
    <div  (click) = "onLoadProfile(profile)">
        <h4>{{profile.profileName}}</h4>
        <p>{{profile.cities.join(', ')}} </p>
    </div>
      <button class="delete" (click)="onDeleteProfile($event,profile)">X</button>
    </article>
        </div>
    </div>
      <div class="profiles">
          <div class="buttonContent">
              <button class="displayProfiles">Show Profiles</button>
              <div class="hideContent">
                  <h2>Saved Profiles</h2>
                  <div class="line"></div>
                  <button class="save" (click) = "onSaveNew()">Save list to Profile</button>
                  <div class="profiles">
                      <article class="profile" *ngFor="let profile of profiles">
                          <div  (click) = "onLoadProfile(profile)">
                              <h4>{{profile.profileName}}</h4>
                              <p>{{profile.cities.join(', ')}} </p>
                          </div>
                          <button class="delete" (click)="onDeleteProfile($event,profile)">X</button>
                      </article>
                  </div>
              </div>
          </div>
      </div>
  `,
  styleUrls: ['./sidebar.css'],
  providers: [ProfileService, WeatherItemsService]
})

export class SideBarComponent implements OnInit {
  private profiles: Profile[];

  constructor(private ProfileService$: ProfileService, private WeatherService$: WeatherItemsService) {
  }

  ngOnInit() {
    this.profiles = this.ProfileService$.getProfiles();
  }

  private onSaveNew() {
    const cities = this.WeatherService$.getWeatherItem().map(el => el.cityName);
    this.ProfileService$.saveNewProfile(cities);
  }

  onLoadProfile(profile: Profile) {
    this.WeatherService$.clearWeatherItems();
    for(let i = 0; i < profile.cities.length; i++) {
      this.WeatherService$.searchWeatherData(profile.cities[i])
        /*.retry()*/
        .subscribe(
          data => {
            const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
            this.WeatherService$.addItem(weatherItem);
          }
        );
    }
  }

  private onDeleteProfile(e: Event, profile: Profile) {
    console.log(e);
    e.stopPropagation();
    this.ProfileService$.deleteProfile(profile);
  }
}

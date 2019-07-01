import { Injectable } from '@angular/core';
import { Profile } from '../profile/profile';

@Injectable()
export class ProfileService {
  private profiles: Profile[];

  constructor() {
    this.profiles = [
      new Profile('Default Profile', ['stalker', 'Volgograd', 'Madagascar'])
    ];
  }

  saveNewProfile(cities: string[]) {
    const profileName = `Profile ${this.profiles.length}`;
    const newProfile = new Profile(profileName, cities);
    this.profiles.push(newProfile);
  }

  public getProfiles() {
    return this.profiles;
  }

  public deleteProfile(profile: Profile) {
    this.profiles.splice(this.profiles.indexOf(profile), 1);
  }

}

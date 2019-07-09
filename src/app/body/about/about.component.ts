import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
    template: `<div class="container">
        <div class="content">
            <div class="header">
            <h1>Here you can find the developer repositories</h1>
            </div>
            <div class="repositories">
                <a class="dev" href="https://github.com/Vodem420/WeatherApp">Frontovik</a>
                <a class="dev" href="https://github.com/Vodem420/WeatherApp">Tehnik</a>
            </div>
        </div>
    </div>`,
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

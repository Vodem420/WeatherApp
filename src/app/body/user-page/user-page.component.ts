import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
    template: `<div class="container">
        <div class="content">
            <h1>Hello, try next year {{nickname}}</h1>
            <button routerLink="/register" routerLinkActive="active" class="logout">Log Out</button>
        </div>
    </div>`,
})
export class UserPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

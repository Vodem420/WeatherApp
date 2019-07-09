import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found404',
  templateUrl: './not-found404.component.html',
  styleUrls: ['./not-found404.component.css'],
    template: `<div class="container">
        <div class="content">
            <h1 class="title">404</h1>
            <h2 class="Houston">Houston, we have a problem.</h2>
        </div>
    </div>`,
})
export class NotFound404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

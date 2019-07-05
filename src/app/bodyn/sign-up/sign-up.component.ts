import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
    template: `<div>
        <h3>Тута мы регаемся</h3>
    <!--<router-outlet></router-outlet>-->
    </div>`,
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

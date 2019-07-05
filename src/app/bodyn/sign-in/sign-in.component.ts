import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
    template: `<div>
        <h3>Тута мы логинимся</h3>
        <!--<router-outlet></router-outlet>-->
    </div>`,
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

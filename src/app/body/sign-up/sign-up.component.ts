import {Component, OnInit} from '@angular/core';
import {ServiceService} from 'src/app/service.service';
import {FormBuilder, FormControl} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import {Validator} from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css'],
    template: `
        <div class="container">
            <div class="content">
                <div class="titleContent">
                    <span class="Title">Registration</span>
                    <div class="line"></div>
                </div>
                <div class="formContent">
                    <form [formGroup]="clientForm" class="Form" form="validate(clientForm.value, clientForm.valid)">
                        <input formControlName="name" minlength="4"
                               type="text" class="formControl" placeholder="Nickname"
                               required pattern="[a-zA-Z_]+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}">
                        <div *ngIf="submitted && userForm.name.errors" class="alert alert-danger">
                            name not specified
                        </div>
                        <input formControlName="email"
                               type="email" name="email" class="formControl" placeholder="E-mail">
                        <div *ngIf="submitted && userForm.email.errors" class="alert alert-danger">
                            incorrect email
                        </div>
                        <input formControlName="password" required pattern="[a-zA-Z_]+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}"
                               type="password" class="formControl" placeholder="Password">
                        <div *ngIf="submitted && userForm.password.errors" class="alert alert-danger">
                            incorrect password
                        </div>
                    </form>
                    <div class="buttonContent">
                        <!-- [disabled]="clientForm.invalid || clientForm.invalid || clientForm.invalid" -->
                        <button routerLink="/userPage" class="confirmButton"
                                 type="submit">Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>`,
})
export class SignUpComponent implements OnInit {
    authForm: FormGroup;
    name: any;
    email: any;
    password: any;
    user: any;
    userForm: any;

    submitted: false; // boolean

    get userForm() {
        return this.authForm.controls;
    }

    constructor(private formGroup: FormGroup,
                private serviceService: ServiceService,
                private formBuilder: FormBuilder,
                ) {
    }
    // validate() {
    //
    // }

    // clientForm: FormGroup = new FormGroup({email: new FormControl()});
    // clientForm: FormGroup = new FormGroup({password: new FormControl()});
    // constructor(private serviceService: ServiceService,
    //             private formBuilder: FormBuilder,) {
    // }

    // this.checkoutForm = this.formBuilder.group({
    //     nickname: '',
    //     EmailAddress: '',
    //     Password: '',
    // });

    callServerForSignUp(data) {
        // console.log('data: ', data);
        this.serviceService.callServerForSignUp(data)
            .subscribe((rData: any) => {
                console.log('responce data : ', rData);
            });
    }


    ngOnInit() {
        this.authForm = this.formGroup.group({
            name: ['', Validator.required()],
            email: ['', Validator.email()],
            password: ['', Validator.required],
        });
    }
}

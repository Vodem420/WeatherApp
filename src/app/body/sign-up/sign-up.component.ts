import {Component, OnInit} from '@angular/core';
import {ServiceService} from 'src/app/service.service';
import {FormBuilder} from '@angular/forms';
// import {FormGroup} from '@angular/forms';
import {User} from '../user';

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
                    <form #frm="ngForm" class="Form" (ngSubmit)="callServerForSignUp(frm)">
                        <div class="form-group">
                            <input
                                    #nameUser="ngModel" minlength="3" name="name" ngModel required pattern="^[a-zA-Z]+$"
                                   type="text" class="formControl" placeholder="Nickname">
                            <div *ngIf="nameUser?.touched" >
                                <div *ngIf="nameUser.errors?.required" class="alert">
                                    Name is required!
                                </div>
                                <div *ngIf="nameUser.errors?.pattern" class="alert">
                                    Invalid Name!
                                </div>
                            </div>
                            <input #emailUser="ngModel" name="email" placeholder="E-mail" class="formControl" ngModel required
                           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$">
                            <div *ngIf="emailUser?.touched">
                                <div *ngIf="emailUser.errors?.required" class="alert">
                                    email is required!
                                </div>
                                <div *ngIf="emailUser.errors?.pattern" class="alert">
                                    Invalid email!
                                </div>
                            </div>
                            <input #passwordUser="ngModel" name="password"
                                   type="password" class="formControl" placeholder="Password" ngModel required
                                  pattern="(?=^.{6,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*">
                            <div *ngIf="passwordUser?.touched">
                                <div *ngIf="passwordUser.errors?.required" class="alert">
                                    password is required!
                                </div>
                                <div *ngIf="passwordUser.errors?.pattern" class="alert">
                                    Invalid password!
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="buttonContent">
                        <button routerLink="/userPage" class="confirmButton"
                                type="submit" [disabled]="frm.invalid">Confirm
                        </button>
                    </div>
                </div>
            </div>
            {{frm.value | json}}
        </div>
        `,
})
export class SignUpComponent implements OnInit {
    userList: User[] = [];
    // authForm: FormGroup;
    // name: any;
    // email: any;
    // password: any;
    // user: any;

    submitted: false; // boolean

    // get userForm() {
    //     return this.authForm.controls;
    // }

    constructor(  private serviceService: ServiceService, private formBuilder: FormBuilder,
    ) {
    }

    callServerForSignUp(data) {
        // console.log('data: ', data);
        this.serviceService.callServerForSignUp(data)
            .subscribe((rData: any) => {
                console.log('responce data : ', rData);
            });
    }


    ngOnInit() {
    }
}

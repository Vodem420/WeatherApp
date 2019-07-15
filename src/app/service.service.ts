import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ServiceService {
    user = {id: 1, name: 'Hello'};

    constructor(private http: HttpClient) {
    }
    getHeaders() {
        return new HttpHeaders()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
    }

    callServerForSignIn() {
        const headers = this.getHeaders();
        this.http.post('http://127.0.0.1:3000/login', JSON.stringify(this.user), {
            headers: headers
        })
            .subscribe(data => {
                console.log(data);
            });
    }

    callServerForSignUp() {
        console.log('callServerForSignUp');
        const headers = this.getHeaders();

        this.http.post('http://127.0.0.1:3000/register', JSON.stringify(this.user), {
            headers: headers
        })
            .subscribe(data => {
                console.log(data);
            });
    }
}

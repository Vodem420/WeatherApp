import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ServiceService {
    // user = {id: 1, name: 'Hello'};

    constructor(private http: HttpClient) {
    }
    getHeaders() {
        return new HttpHeaders()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
    }

    callServerForSignIn(userData) {
        console.log('callServerForSignIn data: ', userData);
        const headers = this.getHeaders();
        return this.http.post('http://127.0.0.1:3000/api/login', JSON.stringify(userData), {
            headers: headers
        });

    }

    callServerForSignUp(userData) {
        console.log('callServerForSignUp data: ', userData);
        const headers = this.getHeaders();

        return this.http.post('http://127.0.0.1:3000/api/register', JSON.stringify(userData), {
        headers: headers
        });

    }
}

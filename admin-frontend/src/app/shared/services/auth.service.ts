import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment'

interface DataRequest {
    email: string;
    password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    uri = environment.backendUrl;

    constructor(private http: HttpClient, private router: Router) {}

    login(data: DataRequest) {
        console.log('AuthService Data', data);
        console.log(this.uri)
        
        this.http.post(this.uri + '/users/login', {...data})
        .subscribe((resp: any) => {
           // this.router.navigate(['dashboard'])
           console.log(resp)
           localStorage.setItem('auth_token', resp.token)
        })
    }

    logout() {

    }

    isLoggedIn() {
        
    }
}
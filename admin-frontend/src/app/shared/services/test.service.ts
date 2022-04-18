import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TestService {
    uri = environment.backendUrl;

    constructor(private http: HttpClient) {}

    testJWT() {
        this.http.get(this.uri + '/products/test-jwt').subscribe()
    }
}
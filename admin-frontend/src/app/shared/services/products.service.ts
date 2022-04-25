import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductsService {
    uri = environment.backendUrl;
    
    constructor(private http: HttpClient) {}

    createProduct(product: any) {
        return this.http.post(this.uri + '/products', product)
    }
}
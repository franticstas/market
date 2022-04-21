import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/products.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
    uri = environment.backendUrl;
    
    constructor(private http: HttpClient) {}

    createProduct(product: Product) {
        this.http.post(this.uri + '/products', product).subscribe()
    }
}
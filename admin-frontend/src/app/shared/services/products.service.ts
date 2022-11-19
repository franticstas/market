import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../types/categories.interface';

@Injectable({ providedIn: 'root' })
export class ProductsService {
    uri = environment.backendUrl;

    constructor(private http: HttpClient) {}

    createProduct(product: FormData) {
        return this.http.post(this.uri + '/products', product);
    }

    loadProducts() {
        return this.http.get(this.uri + '/products/all');
    }

    loadProductById(id: string) {
        return this.http.get(this.uri + '/products/' + id);
    }

    getCategoryList(): Observable<ICategory> {
        return this.http.get<ICategory>(this.uri + '/categories/all');
    }
}

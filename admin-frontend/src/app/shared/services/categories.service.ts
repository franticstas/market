import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICategory } from '../models/categories.model';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
    uri = environment.backendUrl;

    constructor(private http: HttpClient) {}

    createProduct(category: ICategory) {
        return this.http.post(this.uri + '/categories', category)
    }
}
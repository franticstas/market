import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { ICategory } from '../types/categories.interface'

@Injectable({ providedIn: 'root' })
export class CategoriesService {
    uri = environment.backendUrl

    constructor(private http: HttpClient) {}

    createCategory(category: any) {
        return this.http.post(this.uri + '/categories', category)
    }
}

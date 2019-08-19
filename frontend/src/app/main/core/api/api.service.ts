import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    enviroment = 'localhost:3000/'

    constructor(
        private client: HttpClient
    ) { }

    http(method: string, route: string, params?: any) {
        let request: Observable<any>;
        let query = '';

        switch (method) {
            case 'GET':
                if (params) query = this.query(params);
                request = this.client.get(`${this.enviroment}${route}${query}`);
                break;
            case 'POST':
                request = this.client.post(`enviroment${route}`, params);
                break;
            case 'PUT':
                request = this.client.post(`enviroment${route}`, params);
                break;
            case 'DELETE':
                if (params) query = this.query(params);
                request = this.client.get(`enviroment${route}${query}`);
                break;

        }


        request.subscribe(
            null,
            error => {
                console.error(error);
            }
        );
        return request;
    }

    query(params: any): string {
        let query = '';
        Object.keys(params)
            .forEach(key => {
                query += `&${key}=${params[key]}`
            });
        return query;
    }
}

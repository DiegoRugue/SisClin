import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  enviroment = 'http://localhost:3000/';

  constructor(
    private client: HttpClient
  ) { }

  http(method: string, route: string, params?: any) {
    let query = '';

    switch (method) {
      case 'GET':
        if (params) query = this.query(params);
        return this.client.get(`${this.enviroment}${route}${query}`);

      case 'POST':
        return this.client.post(`${this.enviroment}${route}`, params);

      case 'PUT':
        return this.client.post(`${this.enviroment}${route}`, params);

      case 'DELETE':
        if (params) query = this.query(params);
        return this.client.get(`${this.enviroment}${route}${query}`);
    }
  }

  query(params: any): string {
    let query = '?';
    Object.keys(params)
      .forEach(key => {
        query += `${key}=${params[key]}&`;
      });
    return query;
  }
}

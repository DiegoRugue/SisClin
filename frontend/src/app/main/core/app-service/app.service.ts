import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  title: string;
  constructor() {
    this.title = '';
  }

  setTitle(title: string) {
    this.title = title;
  }
}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppService } from 'src/app/main/core/app-service/app.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private title: Title,
    private app: AppService
  ) {
    this.title.setTitle('Narev | Home');
    this.app.setTitle('Home');
  }

  ngOnInit() { }

}

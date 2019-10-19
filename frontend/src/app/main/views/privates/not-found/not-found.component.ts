import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AppService } from 'src/app/main/core/app-service/app.service';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(
    public router: Router,
    private title: Title,
    private app: AppService
  ) {
    this.title.setTitle('Narev | Não encontrado');
    this.app.setTitle('Não encontrado');
  }

  ngOnInit() { }

}

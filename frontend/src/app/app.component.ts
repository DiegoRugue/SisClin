import { Component } from '@angular/core';
import { UserService } from 'src/app/main/core/user/user.service';
import { AppService } from './main/core/app-service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navMode: string;
  title = 'Página Home';


  constructor(
    private user: UserService,
    public app: AppService
  ) {
    this.resize(window.outerWidth);
  }

  resize(width: number): void {
    this.navMode = width > 840 ? 'side' : 'over';
  }

  logOut() {

  }
}

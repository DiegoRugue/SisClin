import { Component } from '@angular/core';
import { UserService } from 'src/app/main/core/user/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    navMode: string;
    title = 'Página Home'
    translate;


    constructor(
        private user: UserService
    ) { 
        this.resize(window.outerWidth);
    }

    resize(width: number): void {
        this.navMode = width > 840 ? 'side' : 'over';
    }

    logOut() {

    }
}

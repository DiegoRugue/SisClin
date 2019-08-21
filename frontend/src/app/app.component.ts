import { Component } from '@angular/core';
import { UserService } from 'src/app/main/core/user/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    navMode: string;

    constructor() { 
        this.resize(window.outerWidth);
    }

    resize(width: number): void {
        this.navMode = width > 840 ? 'side' : 'over';
    }

    click(e) { console.log(e);
    }
}

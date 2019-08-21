import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/main/core/user/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    navMode: string;

    constructor() { 
        this.resize(window.outerWidth);
    }

    ngOnInit() {
        
    }

    resize(width: number): void {
        this.navMode = width > 840 ? 'side' : 'over';
    }

    click(e) { console.log(e);
    }
}

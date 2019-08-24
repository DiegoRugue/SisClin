import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/main/core/api/api.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public info = {
        Id: null,
        Nome: null,
        token: null,
        level: null
    };

    public loading = false;

    constructor(
        private api: ApiService,
        private router: Router,
        private snackbar: MatSnackBar
    ) {
        if (!sessionStorage.narevSession) {
            if (this.isAuth()) {
                this.refreshToken();
            } else {
                this.router.navigate(['login'])
                this.clearInfo();
            }
        } else {
            this.info = JSON.parse(sessionStorage.narevUserInfo);
        }
    }

    public userLevel(): number {
        return this.info.level;
    }

    public isAuth(): boolean {
        return !!localStorage.narevUserToken;
    }

    public login(info: { email: string, senha: string }): void {
        this.api
            .http('POST', `login`, info)
            .subscribe(
                res => {
                    this.setInfo(res);
                },
                error => {
                    this.clearInfo();
                    this.snackbar.open(error.error, 'Ok');
                    this.router.navigate(['login'])
                },
                () => { this.loading = false; }
            );
    }

    refreshToken(): void {
        this.api
            .http('POST', `login/refresh/`, {
                token: localStorage.narevUserToken
            })
            .subscribe(
                res => {
                    this.setInfo(res);
                },
                error => {
                    this.clearInfo();
                    this.snackbar.open('Token expirado, faça login novamente.', 'Ok');
                    this.router.navigate(['login'])
                }
            );
    }

    logOut(): void {
        this.clearInfo();
        this.router.navigate(['login'])
    }

    clearInfo(): void {
        sessionStorage.removeItem('narevSession');
        localStorage.removeItem('narevUserToken');
        this.info = {
            Id: null,
            Nome: null,
            token: null,
            level: null
        };
    }

    setInfo(res: any): void {
        this.info = res.content;
        localStorage.narevUserToken = res.token;
        this.router.navigate([''])
        sessionStorage.narevSession = 'true';
        sessionStorage.narevUserInfo = JSON.stringify(this.info);
    }
}

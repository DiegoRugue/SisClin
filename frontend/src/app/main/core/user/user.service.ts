import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/main/core/api/api.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public info = {
        id: undefined,
        name: undefined,
        level: undefined,
        user: undefined,
        token: null
    };

    public loading = false;

    constructor(
        private api: ApiService,
        private router: Router
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
                    this.info = res.info;
                    localStorage.narevUserToken = res.token;
                    this.router.navigate([''])
                    sessionStorage.narevSession = 'true';
                },
                error => {
                    this.clearInfo();
                    this.router.navigate(['login'])
                }
            );
        this.loading = false;
    }

    refreshToken(): void {
        this.api
            .http('GET', `user/token/${localStorage.narevUserToken}`)
            .subscribe(
                res => {
                    this.info = res.info;
                    localStorage.narevUserToken = res.token;
                    this.router.navigate([''])
                    sessionStorage.narevSession = 'true';
                },
                error => {
                    this.clearInfo();
                    this.router.navigate(['login'])
                }
            );
    }

    clearInfo(): void {
        localStorage.removeItem('narevUserToken');
        sessionStorage.removeItem('narevSession');
        this.info = {
            id: undefined,
            name: undefined,
            level: undefined,
            user: undefined,
            token: null
        }
    }
}

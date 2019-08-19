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
        auth: false
    };

    public loading = false;

    constructor(
        private api: ApiService,
        private router: Router
    ) { }

    public userLevel(): number {
        return this.info.level;
    }

    public isAuth(): boolean {
        return !!localStorage.narevUserToken;
    }

    public login(info: { user: string, passw: string }): void {
        // Sucesso ao logar
        if (info.user === '123' && info.passw === '123') {
            localStorage.narevUserToken = '546s4d5ssda546a5s54d45s6a';
            sessionStorage.narevSession = 'true';
            this.router.navigate(['']);
        } else {
            this.clearInfo();
        }
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
                },
                error => {
                    this.clearInfo();
                    this.router.navigate(['login'])
                }
            );
        sessionStorage.narevSession = 'true';
    }

    clearInfo(): void {
        localStorage.removeItem('narevUserToken');
        localStorage.removeItem('narevSession');
        this.info = {
            id: undefined,
            name: undefined,
            level: undefined,
            user: undefined,
            auth: false
        }
    }
}

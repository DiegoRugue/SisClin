import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    info = {
        id: null,
        name: null,
        level: null,
        user: null,
        auth: false,
    };

    constructor() { }

    public userLevel(): number {
        return this.info.level;
    }

    public isAuth(): boolean {
        return this.info.auth;
    }

    public login(info: { user: string, passw: string }): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (info.user === '123' && info.passw === '123')
                resolve(true);
            reject(false);
        });
    }
}

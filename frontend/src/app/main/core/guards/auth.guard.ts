import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private user: UserService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ) :  boolean {
  
        if(this.user.isAuth()){
            return true;
        }
  
        this.router.navigate(['login']);
  
        return false;
  
    }
}

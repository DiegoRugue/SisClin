import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/main/core/user/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formData = {user: null, passw: null};
    loading = false;

    constructor(
        private user: UserService,
        private router: Router
    ) { }

    ngOnInit() {
        if (this.user.isAuth) 
            this.router.navigate(['']);
    }

    login(form: NgForm) {
        if (form.status === 'INVALID')
            return;
        this.loading = true;
        setTimeout(() => {
            this.user
                .login(this.formData)
                .then(() => console.log('deu'))
                .catch(() => console.log('deu ruim'))
                .finally(() => this.loading = false);
        }, 1000);    
    }

}

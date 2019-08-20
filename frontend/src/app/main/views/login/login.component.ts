import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/main/core/user/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formData = { email: null, senha: null };

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    constructor(
        private user: UserService,
        private router: Router
    ) { }

    ngOnInit() {
        if (this.user.isAuth() && this.user.info.Id) {
            this.router.navigate(['']);
        }
    }

    login(form: NgForm) {        
        if (form.status === 'INVALID' || this.emailFormControl.status === 'INVALID')
            return;
        this.user.loading = true;
        this.user.login(this.formData);
    }
}

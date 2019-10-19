import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/main/core/user/user.service';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Title } from '@angular/platform-browser';

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
        public user: UserService,
        private router: Router,
        private route: ActivatedRoute,
        private title: Title
    ) {
      this.title.setTitle('Narev | Login');
    }

    ngOnInit() {
        if (this.user.isAuth() && this.user.info.Id) {
            this.router.navigate(['narev']);
        }
        const params = this.route.snapshot.queryParams;
    }

    login(form: NgForm) {
        if (form.status === 'INVALID' || this.emailFormControl.status === 'INVALID')
            return;
        this.user.login(this.formData);
    }
}

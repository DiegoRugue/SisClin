import { Routes } from '@angular/router';


export const HOME_ROUTES: Routes = [
    {
        path: '',
        loadChildren: 'src/app/main/views/privates/home/home.module#HomeModule'
    }
];

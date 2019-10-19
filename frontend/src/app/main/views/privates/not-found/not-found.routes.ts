import { Routes } from '@angular/router';


export const NOT_FOUND_ROUTES: Routes = [
    {
        path: 'not-found',
        loadChildren: 'src/app/main/views/privates/not-found/not-found.module#NotFoundModule'
    }
];

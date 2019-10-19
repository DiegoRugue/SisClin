import { Routes } from '@angular/router';

import { HOME_ROUTES } from './home/home.routes';
import { NOT_FOUND_ROUTES } from './not-found/not-found.routes';

export const PRIVATE_ROUTES: Routes = [
    ...HOME_ROUTES,
    ...NOT_FOUND_ROUTES
];

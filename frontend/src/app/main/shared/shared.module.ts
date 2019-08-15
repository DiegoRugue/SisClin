import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const material = [
    MatButtonModule,
    MatCardModule
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ...material
    ],
    exports: [
        ...material
    ]
})
export class SharedModule { }

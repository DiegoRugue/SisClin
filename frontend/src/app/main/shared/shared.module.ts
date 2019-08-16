import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const material = [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ...material
    ],
    exports: [
        FormsModule,
        CommonModule,
        ...material
    ]
})
export class SharedModule { }

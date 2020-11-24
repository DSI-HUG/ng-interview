import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MarkdownModule } from 'ngx-markdown';

import { GettingStartedComponent } from './getting-started.component';

@NgModule({
    exports: [
        GettingStartedComponent
    ],
    declarations: [
        GettingStartedComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        MarkdownModule.forRoot({
            loader: HttpClientModule
        })
    ]
})
export class GettingStartedModule { }

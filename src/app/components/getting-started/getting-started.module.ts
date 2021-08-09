import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        MarkdownModule.forRoot({
            sanitize: SecurityContext.NONE
        })
    ]
})
export class GettingStartedModule { }

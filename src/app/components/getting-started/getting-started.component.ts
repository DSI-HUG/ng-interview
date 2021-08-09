import { Component } from '@angular/core';

@Component({
    selector: 'app-getting-started',
    templateUrl: './getting-started.component.html',
    styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {
    public data: string = 'test';

    constructor() {
        import('!raw-loader!/README.md').then(m => this.data = m.default);
    }
}

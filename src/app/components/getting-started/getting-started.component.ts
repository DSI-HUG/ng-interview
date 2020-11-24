import { Component } from '@angular/core';

const mdRawData = require('!raw-loader!./GETTING-STARTED.md');

@Component({
    selector: 'app-getting-started',
    templateUrl: './getting-started.component.html',
    styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {
    public data = mdRawData.default;
}

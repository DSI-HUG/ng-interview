import { Component } from '@angular/core';

const readmeRawData = require('!raw-loader!README.md');

@Component({
    selector: 'app-getting-started',
    templateUrl: './getting-started.component.html',
    styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {
    public data = readmeRawData.default;
}

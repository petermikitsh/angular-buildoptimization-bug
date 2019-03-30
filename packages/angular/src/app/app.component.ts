import {Component, ViewChild, AfterViewInit} from '@angular/core';
import ReactApp from '../../../react/dist/client/index.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    @ViewChild('container') container;

    ngAfterViewInit() {
      ReactApp(this.container.nativeElement);
    }
}

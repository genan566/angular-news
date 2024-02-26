import {
  Component,
  HostBinding,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './configs/animate';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  title = 'news-app';

  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.animation;
  }

  public ngOnInit() {
    let script = this._renderer2.createElement('script');
    script.src = 'https://cdn.tailwindcss.com';
    script.text = ``;

    this._renderer2.appendChild(this._document.body, script);
  }
}

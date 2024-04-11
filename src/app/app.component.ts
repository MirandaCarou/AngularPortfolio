import { Component} from '@angular/core';
import { EnterPageComponent } from './enter-page/enter-page.component';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [EnterPageComponent, RouterOutlet],
})
export class AppComponent{
  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        sessionStorage.setItem('previousUrl', this.location.path());
      }
    });

    const previousUrl = sessionStorage.getItem('previousUrl');
    if (previousUrl) {
      this.router.navigateByUrl(previousUrl);
      sessionStorage.removeItem('previousUrl');
    }
  }
}

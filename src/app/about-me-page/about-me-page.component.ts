import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.css'],
  standalone: true,
  imports: [NavBarComponent],
})
export class AboutMePageComponent {

}

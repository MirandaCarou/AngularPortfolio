import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  standalone: true,
  imports: [CommonModule,NavBarComponent,HomePageComponent],
})
export class WelcomePageComponent{

}

import { Component} from '@angular/core';
import { EnterPageComponent } from './enter-page/enter-page.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [EnterPageComponent, RouterOutlet],
})
export class AppComponent{

}

import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'enter-page',
  templateUrl: './enter-page.component.html',
  styleUrls: ['./enter-page.component.css'],
  standalone: true,
  imports: [RouterOutlet],
})
export class EnterPageComponent {
  constructor(private router: Router) { }

  enterInPage(){
    console.log('clicando');
    this.router.navigateByUrl('/welcome-page');
  }
}

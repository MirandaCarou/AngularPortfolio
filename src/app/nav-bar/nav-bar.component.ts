import { Component } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  standalone: true,
  imports: [],
})
export class NavBarComponent {

  constructor(private router: Router) { }

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
      if (this.isMenuOpen) {
        dropdown.classList.add('visible');
      } else {
        dropdown.classList.remove('visible');
      }
    }
  }

  enterPage(url: string ,isExternal: boolean){
    console.log('Clicando en Projects');
    if(isExternal){
      window.location.href = url;
    }else{
      this.router.navigateByUrl(url);
    }
  }

}

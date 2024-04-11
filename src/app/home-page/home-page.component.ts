import {Component} from '@angular/core';
import {COURSES} from '../../db-data';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../course-card/course-card.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: true,
  imports: [CommonModule, CourseCardComponent, NavBarComponent],
})
export class HomePageComponent {

  courses = COURSES;

  ngOnInit() {
    console.log('carga el welcome page');
    console.log(this.courses)
  }
}



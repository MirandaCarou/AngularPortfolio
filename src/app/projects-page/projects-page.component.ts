import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { PROJECTS } from 'src/db-data';
import { CourseCardComponent } from '../course-card/course-card.component';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css'],
  standalone: true,
  imports: [NavBarComponent, CourseCardComponent, CommonModule]
})
export class ProjectsPageComponent {

  constructor(private router: Router) { }
  courses = PROJECTS;

  enterPage(url){
    this.router.navigateByUrl(url);
  }
}

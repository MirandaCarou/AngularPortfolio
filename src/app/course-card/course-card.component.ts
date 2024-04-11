import {
    Component,
    EventEmitter,
    Input,
    Output, TemplateRef,

} from '@angular/core';
import {Course} from '../model/course';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class CourseCardComponent{

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseSelected')
    courseEmitter = new EventEmitter<Course>();

    constructor(private router: Router) { }

    ngOnInit(): void {
      console.log(this.course);

    }

    enterPage(url: string, isExternal: boolean){
      console.log('Clicando en Projects');
      if(isExternal){
        window.location.href = url;
      }else{
        this.router.navigateByUrl(url);
      }
    }

}

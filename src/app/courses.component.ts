import { Component } from '@angular/core';
import { CouresService } from './course/courses.service';

@Component({
    selector: 'courses',
    template: '<h2>Courses {{courses}}</h2>'
})
export class CoursesOneComponent {
    courses: any;
    constructor(coursesService: CouresService) {
        this.courses = coursesService.getCourses();
    }

}
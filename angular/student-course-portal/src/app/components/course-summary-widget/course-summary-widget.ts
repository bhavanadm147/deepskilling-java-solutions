import { Component } from '@angular/core';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-summary-widget',
  imports: [],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css'
})
export class CourseSummaryWidget {

  constructor(
    public courseService: CourseService
  ) {}

  addSampleCourse(): void {

    const exists =
      this.courseService.getCourseById(6);

    if (!exists) {
      this.courseService.addCourse({
        id: 6,
        name: 'Microservices',
        code: 'MS101',
        credits: 3,
        gradeStatus: 'pending'
      });
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard, Highlight],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: true
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA101',
      credits: 4,
      gradeStatus: 'pending',
      enrolled: false
    },
    {
      id: 3,
      name: 'Spring Boot',
      code: 'SB101',
      credits: 3,
      gradeStatus: 'passed',
      enrolled: true
    },
    {
      id: 4,
      name: 'Database Management',
      code: 'DBMS101',
      credits: 3,
      gradeStatus: 'failed',
      enrolled: false
    },
    {
      id: 5,
      name: 'Web Development',
      code: 'WEB101',
      credits: 1,
      gradeStatus: 'pending',
      enrolled: false
    }
  ];

  selectedCourseId: number | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;

    const course = this.courses.find(c => c.id === courseId);

    if (course) {
      course.enrolled = true;
    }
  }

  // trackBy prevents Angular from unnecessarily recreating
  // every DOM element when the courses array changes.
  trackByCourseId(index: number, course: any): number {
    return course.id;
  }
}
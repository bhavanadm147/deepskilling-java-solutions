import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input() course!: Course;

  @Output()
  enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  constructor(
    public enrollmentService: EnrollmentService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log(
        'Course changed:',
        'Previous:',
        changes['course'].previousValue,
        'Current:',
        changes['course'].currentValue
      );
    }
  }

  toggleEnrollment(): void {

    if (this.enrollmentService.isEnrolled(this.course.id)) {

      this.enrollmentService.unenroll(this.course.id);

    } else {

      this.enrollmentService.enroll(this.course.id);

      this.enrollRequested.emit(this.course.id);
    }
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  get cardClasses() {
    return {
      'card--enrolled':
        this.enrollmentService.isEnrolled(this.course.id),

      'card--full':
        this.course.credits >= 4,

      'expanded':
        this.isExpanded
    };
  }

  get borderColor(): string {

    switch (this.course.gradeStatus) {

      case 'passed':
        return 'green';

      case 'failed':
        return 'red';

      default:
        return 'grey';
    }
  }
}
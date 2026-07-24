import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm {

  studentName = '';
  studentEmail = '';
  courseId: number | null = null;
  preferredSemester = '';
  agreeToTerms = false;

  submitted = false;

  onSubmit(form: NgForm): void {
    console.log('Form Value:', form.value);
    console.log('Form Valid:', form.valid);

    if (form.valid) {
      this.submitted = true;
    }
  }

  resetForm(form: NgForm): void {
    form.resetForm();
    this.submitted = false;
  }
}
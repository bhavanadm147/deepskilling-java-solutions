import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';


// Custom synchronous validator
export function noCourseCode(
  control: AbstractControl
): ValidationErrors | null {

  const value = control.value;

  if (
    value &&
    value.toString().toUpperCase().startsWith('XX')
  ) {
    return { noCourseCode: true };
  }

  return null;
}


// Custom asynchronous validator
export function simulateEmailCheck(
  control: AbstractControl
): Promise<ValidationErrors | null> {

  return new Promise((resolve) => {

    setTimeout(() => {

      const email = control.value || '';

      if (email.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }

    }, 800);

  });
}


@Component({
  selector: 'app-reactive-enrollment-form',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {

  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      studentEmail: this.fb.control(
        '',
        [
          Validators.required,
          Validators.email
        ],
        [
          simulateEmailCheck
        ]
      ),

      courseId: [
        '',
        [
          Validators.required,
          noCourseCode
        ]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      additionalCourses: this.fb.array([])

    });

  }


  // This getter keeps the template clean and avoids
  // repeatedly casting the control to FormArray in HTML.
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }


  addCourse(): void {

    this.additionalCourses.push(
      new FormControl('', Validators.required)
    );

  }


  removeCourse(index: number): void {

    this.additionalCourses.removeAt(index);

  }


  onSubmit(): void {

    if (this.enrollForm.valid) {

      // value excludes disabled form controls.
      console.log(
        'Form Value:',
        this.enrollForm.value
      );

      // getRawValue() includes disabled form controls.
      console.log(
        'Raw Form Value:',
        this.enrollForm.getRawValue()
      );

    }

  }

}
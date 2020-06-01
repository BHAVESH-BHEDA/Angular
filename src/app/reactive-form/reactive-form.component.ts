import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
  ) { }

  // City names
  City: any = ['Vadodara', 'Surat', 'Rajkot', 'Ahmedabad'];

  userDetailForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    city: ['', [Validators.required]],
  });

  onSubmit() {
    // this.submitted = true;
    if (!this.userDetailForm.valid) {
      alert('Please enter valid data');
      return false;
    } else {
      const data = this.userDetailForm.value;
      // API call here
      alert('Valid form data');
      // this.userDetailForm.reset();
    }
  }

  ngOnInit() {
  }

}


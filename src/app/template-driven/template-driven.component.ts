import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addUser(regForm: NgForm) {
    if (regForm.valid) {
      const data = regForm.value;
      // API call here
      alert('Valid form data');
      regForm.resetForm();
    } else {
      alert('Please enter valid data');
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  submitted : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
  }

}

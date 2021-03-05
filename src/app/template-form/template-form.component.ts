import { User } from './../models/user';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfirmEqualDirective } from './../_helpers/confirm-equal.directive';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  submitted : boolean = false;
  model : User = {};

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.submitted = true;
  }

}

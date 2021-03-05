import { Directive, Input } from '@angular/core';
import { ValidationErrors, Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

import { confirmEqual } from './confirm-equal.validator';

@Directive({
  selector: '[confirmEqual]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualDirective,
    multi: true
  }]
})
export class ConfirmEqualDirective implements Validator {

  @Input('confirmEqual') confirmEqualStrings: string[] = [];

  constructor() { }

  validate(formGroup : FormGroup) : ValidationErrors {
    return confirmEqual(this.confirmEqualStrings[0], this.confirmEqualStrings[1])(formGroup);
  }

}


import { FormGroup } from '@angular/forms';


export function confirmEqual(controlName: string, matchingControlName: string) {

  return (formGroup : FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    // return null if controls haven't initialized yet
    if(!control || !matchingControl){
      return null as any;
    }

    // return null if another validator has already found an error on the matchingControl
    if(matchingControl.errors && !matchingControl.errors.confirmEqual) {
      return null as any;
    }

    if(control.value !== matchingControl.value) {
      return matchingControl.setErrors({ confirmEqual: true });
    }
    else {
      matchingControl.setErrors(null);
    }
  }
}

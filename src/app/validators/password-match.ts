import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export const validatePasswordMatch = (passwordControl: string = 'password', confirmControl: string = 'confirm'): ValidatorFn => {
    return (group: FormGroup): ValidationErrors => {
        const password = group.controls[passwordControl];
        const confirm = group.controls[confirmControl];
        if (password.value !== confirm.value) {
            confirm.setErrors({mismatch: true});
        } else {
            confirm.setErrors({mismatch: false});
        }
        return;
    };
}

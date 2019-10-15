import {AbstractControl, ValidatorFn} from '@angular/forms';

export const isNumber = (): ValidatorFn => {
    return (c: AbstractControl) => isNaN(c.value) ? {notNumber: true} : null;
};

import { isNil } from 'lodash';

export function callAllFunctions(...functions) {
    return function merged() {
        for (const fn of functions) {
            if (isNil(fn)) {
                continue;
            }
            if (typeof fn === 'function') {
                fn.apply(null, arguments);
                continue;
            }
        }
    };
}

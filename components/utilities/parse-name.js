import { isNil } from 'lodash';

export function parseName(name, { stripBeforeLastDot = true } = {}) {
    const noNameError = 'A name must be provided when calling parseName';
    if (isNil(name)) {
        throw new Error(noNameError);
    }
    let _name = name.trim();
    if (_name === '') {
        throw new Error(noNameError);
    }
    if (!stripBeforeLastDot) {
        return _name;
    }
    if (_name.indexOf('.') >= 0) {
        const parts = _name.split('.');
        _name = parts[parts.length - 1];
    }
    return _name;
}

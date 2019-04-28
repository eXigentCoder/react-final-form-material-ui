import { parseName } from './';

export function getComponentId({ name, id }) {
    const _id = parseId(id);
    if (_id) {
        return _id;
    }
    const _name = parseName(name, { stripBeforeLastDot: false });
    return _name;
}

function parseId(id) {
    if (id) {
        return id.trim();
    }
    return id;
}

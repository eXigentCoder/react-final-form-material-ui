import * as React from 'react';

import { getComponentId } from './';

export function addNameToChildren({ children, name, id }) {
    const _id = getComponentId({ id, name });
    let counter = 0;
    return React.Children.map(children, addName);

    function addName(child) {
        counter++;
        const childId = getComponentId({ id: child.props.id, name: `${_id}${counter}` });
        return React.cloneElement(child, { name, id: childId });
    }
}

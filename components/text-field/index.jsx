import * as React from 'react';

import { TextField as MuiTextField, FormControl } from '@material-ui/core';
import { Field } from 'react-final-form';
import { getComponentId } from '../utilities';
//import { callAllFunctions, getComponentId, nameToLabel, processMetaForErrors } from '../utilities';

export function TextField({ id, name, type = 'text' }) {
    id = getComponentId({ id, name });
    return (
        <FormControl component="fieldset">
            <Field name={name}>
                <MuiTextField id={id} name={name} type={type} />
            </Field>
        </FormControl>
    );
}

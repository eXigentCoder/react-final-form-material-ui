import * as React from 'react';
import { render } from 'react-testing-library';
import { TextField } from './';
import { Form } from 'react-final-form';
import 'jest-dom/extend-expect';

describe('TextField', () => {
    it('Should render successfully with just a name provided', () => {
        const { getByText, container } = render(
            <Form
                onSubmit={() => null}
                render={() => {
                    return <TextField name="testing" />;
                }}
            />
        );
        console.log({ html: container.innerHTML });
        getByText('Testing');
    });
});

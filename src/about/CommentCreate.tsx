import * as React from 'react';

import {
    Create,
    DateInput,
    TextInput,
    SimpleFormConfigurable,
    required,
    minLength,
    maxLength,
} from 'react-admin'; // eslint-disable-line import/no-unresolved
import PostReferenceInput from './PostReferenceInput';

const now = new Date();
const defaultSort = { field: 'title', order: 'ASC' };

const CommentCreate = () => (
    <Create redirect={false}>
        <SimpleFormConfigurable>
        <TextInput fullWidth source="title" validate={maxLength(100)} />
            <TextInput fullWidth source="body" multiline />
        </SimpleFormConfigurable>
    </Create>
);

export default CommentCreate;

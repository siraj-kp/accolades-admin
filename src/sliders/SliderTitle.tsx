import * as React from 'react';
import { useTranslate, useRecordContext } from 'react-admin';

export default () => {
    const translate = useTranslate();
    const record = useRecordContext();
    return (
        <>
            {record
                ? translate('slider.edit.title', { title: record.title })
                : ''}
        </>
    );
};

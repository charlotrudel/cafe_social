import React from 'react';
import { useNavigate } from 'react-router';
import CoffeeRecordForm from './CoffeeRecordForm';
import CoffeeRecordInterface, { emptyRecord } from './CoffeeRecordInterface';

export default function Create() {
    const navigate = useNavigate();

    // This function will handle the submission.
    async function onSubmit(e: any, newRecord: CoffeeRecordInterface) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        await fetch('http://localhost:5050/record', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRecord),
        }).catch((error) => {
            window.alert(error);
            return;
        });

        navigate('/');
    }

    // This following section will display the form that takes the input from the user.
    return <CoffeeRecordForm formTitle="Nouveau café" initialState={emptyRecord} onSubmit={onSubmit} />;
}

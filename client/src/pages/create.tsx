import React from 'react';
import { useNavigate } from 'react-router';
import CoffeeRecordForm from '../components/CoffeeRecordForm';
import CoffeeRecordInterface, { emptyRecord } from '../components/CoffeeRecordInterface';
import coffeeRecordService from '../services/coffeeRecordService';

export default function Create() {
    const navigate = useNavigate();

    // This function will handle the submission.
    async function onSubmit(e: React.FormEvent, newRecord: CoffeeRecordInterface) {
        e.preventDefault();
        await coffeeRecordService.createRecord(newRecord);
        navigate('/');
    }

    // This following section will display the form that takes the input from the user.
    return <CoffeeRecordForm formTitle="Nouveau café" initialState={emptyRecord} onSubmit={onSubmit} />;
}

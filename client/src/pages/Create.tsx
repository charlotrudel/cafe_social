import React from 'react';
import { useNavigate } from 'react-router';
import TastingRecordForm from '../components/TastingRecordForm';
import TastingRecordInterface, { emptyRecord } from '../components/TastingRecordInterface';
import tastingRecordService from '../services/tastingRecordService';

export default function Create() {
    const navigate = useNavigate();

    // This function will handle the submission.
    async function onSubmit(e: React.FormEvent, newRecord: TastingRecordInterface) {
        e.preventDefault();
        await tastingRecordService.createRecord(newRecord);
        navigate('/');
    }

    // This following section will display the form that takes the input from the user.
    return <TastingRecordForm formTitle="Nouveau café" initialState={emptyRecord} onSubmit={onSubmit} />;
}

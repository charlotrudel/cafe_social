import React from 'react';
import { useNavigate } from 'react-router';
import RoasterForm from '../components/roasterComponents/RoasterForm';
import RoasterInterface, { emptyRecord } from '../components/roasterComponents/RoasterInterface';
import roasterService from '../services/roasterService';

export default function Roaster() {
    const navigate = useNavigate();

    // This function will handle the submission.
    async function onSubmit(e: React.FormEvent, newRecord: RoasterInterface) {
        e.preventDefault();
        await roasterService.createRecord(newRecord);
        navigate('/');
    }

    // This following section will display the form that takes the input from the user.
    return <RoasterForm formTitle="Nouveau torréfacteur" initialState={emptyRecord} onSubmit={onSubmit} />;
}

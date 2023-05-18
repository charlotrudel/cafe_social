import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { redirect } from 'react-router-dom';
import CoffeeRecordForm from '../components/CoffeeRecordForm';
import CoffeeRecordInterface, { emptyRecord } from '../components/CoffeeRecordInterface';
import coffeeRecordService from '../services/coffeeRecordService';

export default function Edit() {
    const params: any = useParams();
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState<boolean>(false);
    const [initialState, setInitialState] = useState<CoffeeRecordInterface>(emptyRecord);

    useEffect(() => {
        async function getRecordToEdit(id: number) {
            const record = await coffeeRecordService.getRecordById(id);
            if (!record) {
                window.alert(`Record with id ${params.id} not found`);
                redirect('/');
                return;
            }
            setInitialState(record);
            setLoaded(true);
        }
        getRecordToEdit(params.id);
    }, [params.id, navigate]);

    async function onSubmit(e: React.FormEvent, editedRecord: CoffeeRecordInterface) {
        e.preventDefault();
        // This will send a post request to update the data in the database.
        coffeeRecordService.updateRecord(params.id, editedRecord);
        navigate('/');
    }

    // This following section will display the form that takes input from the user to update the data.

    return loaded ? (
        <CoffeeRecordForm formTitle="Modifier les notes" initialState={initialState} onSubmit={onSubmit} />
    ) : (
        <div>loading</div>
    );
}

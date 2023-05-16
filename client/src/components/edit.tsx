import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import CoffeeRecordForm from './CoffeeRecordForm';
import CoffeeRecordInterface, { emptyRecord } from './CoffeeRecordInterface';

export default function Edit() {
    const params: any = useParams();
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState<boolean>(false);
    const [initialState, setInitialState] = useState<CoffeeRecordInterface>(emptyRecord);

    useEffect(() => {
        async function fetchData() {
            const id = params.id.toString();
            const response = await fetch(`http://localhost:5050/record/${params.id.toString()}`);

            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const record = await response.json();
            if (!record) {
                window.alert(`Record with id ${id} not found`);
                navigate('/');
                return;
            }

            setInitialState(record);
            setLoaded(true);
        }

        fetchData();

        return;
    }, [params.id, navigate]);

    async function onSubmit(e: React.FormEvent, editedRecord: CoffeeRecordInterface) {
        e.preventDefault();
        // This will send a post request to update the data in the database.
        await fetch(`http://localhost:5050/record/${params.id}`, {
            method: 'PATCH',
            body: JSON.stringify(editedRecord),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        navigate('/');
    }

    // This following section will display the form that takes input from the user to update the data.

    return loaded ? (
        <CoffeeRecordForm formTitle="Modifier les notes" initialState={initialState} onSubmit={onSubmit} />
    ) : (
        <div>loading</div>
    );
}

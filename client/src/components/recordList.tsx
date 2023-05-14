import { useEffect, useState } from 'react';
import CoffeeRecord from './CoffeeRecord';
import CoffeeRecordInterface from './CoffeeRecordInterface';
import coffeeRecordService from '../services/coffeeRecordService';

export default function RecordList() {
    const [records, setRecords] = useState<CoffeeRecordInterface[]>([]);

    useEffect(() => {
        refreshRecords();
    }, [records.length]);

    async function refreshRecords() {
        setRecords(await coffeeRecordService.getRecords());
    }

    async function deleteRecord(id: number | undefined) {
        let newRecords = await coffeeRecordService.deleteRecord(records, id);
        setRecords(newRecords);
    }

    // This following section will display the table with the records of individuals.
    return (
        <div className="flex flex-col">
            <h3 className="text-xl font-bold m-4">Publications</h3>
            {records.map((record: CoffeeRecordInterface) => {
                return <CoffeeRecord record={record} deleteRecord={() => deleteRecord(record._id)} key={record._id} />;
            })}
        </div>
    );
}

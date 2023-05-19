import { useEffect, useState } from 'react';
import TastingRecord from '../components/TastingRecord';
import TastingRecordInterface from '../components/TastingRecordInterface';
import tastingRecordService from '../services/tastingRecordService';

export default function RecordList() {
    const [records, setRecords] = useState<TastingRecordInterface[]>([]);

    useEffect(() => {
        async function refreshRecords() {
            setRecords(await tastingRecordService.getRecords());
        }
        refreshRecords();
    }, [records.length]);

    async function deleteRecord(id: number | undefined) {
        await tastingRecordService.deleteRecord(records, id);
        setRecords([]);
    }

    // This following section will display the table with the records of individuals.
    return (
        <div className="flex flex-col">
            <h3 className="text-xl font-bold m-4">Publications</h3>
            <div className="max-w-2xl self-center">
                {records.map((record: TastingRecordInterface) => {
                    return (
                        <TastingRecord record={record} deleteRecord={() => deleteRecord(record._id)} key={record._id} />
                    );
                })}
            </div>
        </div>
    );
}

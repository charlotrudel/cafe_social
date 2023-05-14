import CoffeeRecordInterface from '../components/CoffeeRecordInterface';

// This method fetches the records from the database.
async function getRecords() {
    const response = await fetch(`http://localhost:5050/record/`);

    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
    }

    const records = await response.json();
    return records;
}

// This method will delete a record
async function deleteRecord(records: CoffeeRecordInterface[], id: number | undefined) {
    //TODO: add error message
    await fetch(`http://localhost:5050/record/${id}`, {
        method: 'DELETE',
    });

    const newRecords = records.filter((el: CoffeeRecordInterface) => el._id !== id);
    return newRecords;
}

let coffeeRecordService = {
    getRecords,
    deleteRecord,
};
export default coffeeRecordService;

import CoffeeRecordInterface from '../components/CoffeeRecordInterface';

// This method fetches the records from the database.
async function getRecords() {
    const response = await fetch(`http://localhost:5050/record`);

    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
    }

    const records = await response.json();
    return records;
}

async function getRecordById(id: number) {
    return fetch(`http://localhost:5050/record/${id.toString()}`)
        .then((response) => {
            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            return response.json();
        })
        .catch((error) => {
            console.log(error);
            return;
        });
}

// When a post request is sent to the create url, we'll add a new record to the database.
async function createRecord(newRecord: CoffeeRecordInterface) {
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
}

async function updateRecord(id: number, editedRecord: CoffeeRecordInterface) {
    await fetch(`http://localhost:5050/record/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(editedRecord),
        headers: {
            'Content-Type': 'application/json',
        },
    });
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
    getRecordById,
    createRecord,
    updateRecord,
    deleteRecord,
};
export default coffeeRecordService;

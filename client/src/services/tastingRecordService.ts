import TastingRecordInterface from '../components/TastingRecordInterface';

// This method fetches the records from the database.
async function getRecords() {
    return fetch(`/record`)
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
        });
}

async function getRecordById(id: number) {
    return fetch(`/record/${id.toString()}`)
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
        });
}

// When a post request is sent to the create url, we'll add a new record to the database.
async function createRecord(newRecord: TastingRecordInterface) {
    await fetch('/record', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecord),
    }).catch((error) => {
        window.alert(error);
    });
}

async function updateRecord(id: number, editedRecord: TastingRecordInterface) {
    await fetch(`/record/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(editedRecord),
        headers: {
            'Content-Type': 'application/json',
        },
    }).catch((error) => {
        window.alert(error);
    });
}

// This method will delete a record
async function deleteRecord(records: TastingRecordInterface[], id: number | undefined) {
    await fetch(`/record/${id}`, {
        method: 'DELETE',
    }).catch((error) => {
        window.alert(error);
    });
}

let tastingRecordService = {
    getRecords,
    getRecordById,
    createRecord,
    updateRecord,
    deleteRecord,
};
export default tastingRecordService;

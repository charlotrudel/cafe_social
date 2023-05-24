import RoasterInterface from "../components/roasterComponents/RoasterInterface";

// This method fetches the roasters from the database.
async function getRecords() {
  return fetch(`/roaster`)
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

async function getRecordById(id: string) {
  return fetch(`/roaster/${id.toString()}`)
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

// When a post request is sent to the create url, we'll add a new roaster to the database.
async function createRecord(newRecord: RoasterInterface) {
  await fetch("/roaster", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRecord),
  }).catch((error) => {
    window.alert(error);
  });
}

async function updateRecord(id: string, editedRecord: RoasterInterface) {
  await fetch(`/roaster/${id}`, {
    method: "PATCH",
    body: JSON.stringify(editedRecord),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => {
    window.alert(error);
  });
}

// This method will delete a roaster
async function deleteRecord(
  roasters: RoasterInterface[],
  id: number | undefined
) {
  await fetch(`/roaster/${id}`, {
    method: "DELETE",
  }).catch((error) => {
    window.alert(error);
  });
}

let roasterService = {
  getRecords,
  getRecordById,
  createRecord,
  updateRecord,
  deleteRecord,
};
export default roasterService;

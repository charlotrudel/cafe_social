import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { redirect } from "react-router-dom";
import TastingRecordForm from "../components/TastingRecordForm";
import TastingRecordInterface, {
  emptyRecord,
} from "../components/TastingRecordInterface";
import tastingRecordService from "../services/tastingRecordService";

export default function Edit() {
  const { recordID: temp } = useParams<"recordID">();
  const recordID = temp as string;
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [initialState, setInitialState] =
    useState<TastingRecordInterface>(emptyRecord);

  useEffect(() => {
    async function getRecordToEdit(id: string) {
      const record = await tastingRecordService.getRecordById(id);
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        redirect("/");
        return;
      }
      setInitialState(record);
      setLoaded(true);
    }
    getRecordToEdit(recordID);
  }, [recordID, navigate]);

  async function onSubmit(
    e: React.FormEvent,
    editedRecord: TastingRecordInterface
  ) {
    e.preventDefault();
    // This will send a post request to update the data in the database.
    tastingRecordService.updateRecord(recordID, editedRecord);
    navigate("/");
  }

  // This following section will display the form that takes input from the user to update the data.

  return loaded ? (
    <TastingRecordForm
      formTitle="Modifier les notes"
      initialState={initialState}
      onSubmit={onSubmit}
    />
  ) : (
    <div>loading</div>
  );
}

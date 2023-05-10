import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
 
const Record = (props:any) => (
  <div className="flex flex-col border border-black rounded-md bg-coffeeSecond self-center w-96 p-4 mb-4 relative">
    <button className="absolute top-0 right-0 p-1"
        onClick={() => {
            props.deleteRecord(props.record._id);
        }}
        ><XMarkIcon className="w-8"/></button>
    <div className="">Nom : {props.record.name}</div>
    <div className="">Torréfacteur : {props.record.roaster}</div>
    <div className="">Degré de torréfaction : {props.record.roast}</div>
    <div className="flex self-end gap-2 mt-2">
        <Link className="" to={`/edit/${props.record._id}`}>Modifier</Link>
        
    </div>
  </div>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5050/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id:any) {
   await fetch(`http://localhost:5050/record/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el:any) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record:any) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
  <div className="flex flex-col">
  <h3 className="text-xl font-bold m-4">Publications</h3>
  {recordList()}
  </div>
 );
}
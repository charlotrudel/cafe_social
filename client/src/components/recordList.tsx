import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
 
const Record = (props:any) => (
  <div className="flex flex-col border border-black rounded-md bg-coffeeSecond self-center max-w-2xl p-2 sm:p-4 m-1 sm:m-4 text-sm sm:text-base relative">
    <button className="absolute top-0 right-0 p-1"
        onClick={() => {
            props.deleteRecord(props.record._id);
        }}
        ><XMarkIcon className="w-8"/></button>
    <div className="font-semibold mb-1">{props.record.userName}</div>
    <div className="">Nom : {props.record.coffeeName}</div>
    <div className="">Torréfacteur : {props.record.roaster}</div>
    <div className="mb-2">Degré de torréfaction : {props.record.roast}</div>
    <div className="grid grid-cols-5 border border-stone-700 text-center ">
      <div className="border-b border-r border-stone-700"></div>
      <div className="border border-stone-700">Quantité</div>
      <div className="border border-stone-700">Qualité</div>
      <div className="border border-stone-700 col-span-2">Notes</div>
      <div className="border border-stone-700">Arôme</div>
      <div className="align-middle border border-stone-700">{props.record.aromaQuantity}</div>
      <div className="border border-stone-700">{props.record.aromaQuality}</div>
      <div className="text-left col-span-2 p-1 border border-stone-700">{props.record.aromaNotes}</div>
      <div className="border border-stone-700">Acidité</div>
      <div className="border border-stone-700">{props.record.acidityQuantity}</div>
      <div className="border border-stone-700">{props.record.acidityQuality}</div>
      <div className="text-left col-span-2 p-1 border border-stone-700">{props.record.acidityNotes}</div>
      <div className="border border-stone-700">Douceur</div>
      <div className="border border-stone-700">{props.record.sweetnessQuantity}</div>
      <div className="border border-stone-700">{props.record.sweetnessQuality}</div>
      <div className="text-left col-span-2 p-1 border border-stone-700">{props.record.sweetnessNotes}</div>
      <div className="border border-stone-700">Corps</div>
      <div className="border border-stone-700">{props.record.bodyQuantity}</div>
      <div className="border border-stone-700">{props.record.bodyQuality}</div>
      <div className="text-left col-span-2 p-1 border border-stone-700">{props.record.bodyNotes}</div>
      <div className="border border-stone-700">Finale</div>
      <div className="border border-stone-700">{props.record.finishQuantity}</div>
      <div className="border border-stone-700">{props.record.finishQuality}</div>
      <div className="text-left col-span-2 p-1 border border-stone-700" >{props.record.finishNotes}</div>
    </div>
    <div className="my-2">Notes de goût :</div>
    <p>{props.record.flavourNotes}</p>
    <div className="mt-2">Note globale : {props.record.overallScore}</div>

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
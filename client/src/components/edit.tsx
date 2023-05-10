import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
 const [form, setForm] = useState({
   name: "",
   roaster: "",
   roast: "",
   records: [],
 });
 const params:any = useParams();
 const navigate = useNavigate();
 
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
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value:any) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e:any) {
   e.preventDefault();
   const editedPerson = {
     name: form.name,
     roaster: form.roaster,
     roast: form.roast,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5050/record/${params.id}`, {
     method: "PATCH",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
  <div className="flex flex-col items-center">
    <h3 className="text-xl">Modifiez vos notes</h3>
    <form onSubmit={onSubmit} className="flex flex-col max-w-lg gap-2 items-center border-t py-2">
      <div>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-lbf-orange focus:ring-1 focus:ring-lbf-orange"
          id="name"
          value={form.name}
          onChange={(e) => updateForm({ name: e.target.value })}
        />
      </div>
      <div className="">
        <label htmlFor="roaster">Torréfacteur</label>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-lbf-orange focus:ring-1 focus:ring-lbf-orange"
          id="roaster"
          value={form.roaster}
          onChange={(e) => updateForm({ roaster: e.target.value })}
        />
      </div>
      <div className="self-start">
        <label>Degré de torréfaction</label>
        <div className="">
          <input
            className=""
            type="radio"
            name="roastOptions"
            id="roastLight"
            value="Light"
            checked={form.roast === "Light"}
            onChange={(e) => updateForm({ roast: e.target.value })}
          />
          <label htmlFor="roastLight" className="ml-1">Light</label>
        </div>
        <div className="">
          <input
            className=""
            type="radio"
            name="roastOptions"
            id="roastMedium"
            value="Medium"
            checked={form.roast === "Medium"}
            onChange={(e) => updateForm({ roast: e.target.value })}
          />
          <label htmlFor="roastMedium" className="ml-1">Medium</label>
        </div>
        <div className="">
          <input
            className=""
            type="radio"
            name="roastOptions"
            id="roastDark"
            value="Dark"
            checked={form.roast === "Dark"}
            onChange={(e) => updateForm({ roast: e.target.value })}
          />
          <label htmlFor="roastDark" className="ml-1">Dark</label>
        </div>
      </div>
      <div className="">
        <input
          type="submit"
          value="Mettre à jour"
          className="cursor-pointer border rounded-md border-black p-2 bg-coffeeSecond shadow-sm shadow-[#7c5f3b]"
        />
      </div>
    </form>
  </div>
 );
}
import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   roaster: "",
   roast: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value:any) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e:any) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newCoffee = { ...form };
 
   await fetch("http://localhost:5050/record", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newCoffee),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", roaster: "", roast: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
  <div className="flex flex-col items-center">
  <h3 className="text-xl">Nouveau café</h3>
  <form onSubmit={onSubmit} className="flex flex-col max-w-lg gap-2 items-center border-t py-2">
    <div>
      <label htmlFor="name">Nom</label>
      <input
        type="text"
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-lbf-orange focus:ring-1 focus:ring-lbf-orange"
        id="name"
        value={form.name}
        onChange={(e) => updateForm({ name: e.target.value })}
        required
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
        required
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
          required
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
        value="Soumettre"
        className="cursor-pointer border rounded-md border-black p-2 bg-coffeeSecond shadow-sm shadow-[#7c5f3b]"
      />
    </div>
  </form>
</div>
 );
}
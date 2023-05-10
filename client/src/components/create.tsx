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
   <div>
     <h3>New coffee</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="roaster">Roaster</label>
         <input
           type="text"
           className="form-control"
           id="roaster"
           value={form.roaster}
           onChange={(e) => updateForm({ roaster: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="roastOptions"
             id="roastLight"
             value="Light"
             checked={form.roast === "Light"}
             onChange={(e) => updateForm({ roast: e.target.value })}
           />
           <label htmlFor="roastLight" className="form-check-label">Light</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="roastOptions"
             id="roastMedium"
             value="Medium"
             checked={form.roast === "Medium"}
             onChange={(e) => updateForm({ roast: e.target.value })}
           />
           <label htmlFor="roastMedium" className="form-check-label">Medium</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="roastOptions"
             id="roastDark"
             value="Dark"
             checked={form.roast === "Dark"}
             onChange={(e) => updateForm({ roast: e.target.value })}
           />
           <label htmlFor="roastDark" className="form-check-label">Dark</label>
         </div>
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Add coffee"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}
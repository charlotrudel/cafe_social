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
  <div>
  <h3>Edit coffee</h3>
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
        value="Update record"
        className="btn btn-primary"
      />
    </div>
  </form>
</div>
 );
}
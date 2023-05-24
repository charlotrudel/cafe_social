import React, { useState } from "react";
import RoasterInterface from "./RoasterInterface";
import { NavLink } from "react-router-dom";

type Props = {
  formTitle: string;
  initialState: RoasterInterface;
  onSubmit: (
    e: React.FormEvent,
    newRecord: RoasterInterface
  ) => Promise<void>;
};

export default function RoasterForm({
  formTitle,
  initialState,
  onSubmit,
}: Props) {
  const [form, setForm] = useState<RoasterInterface>(initialState);

  // These methods will update the state properties.
  function updateForm(e: React.ChangeEvent) {
    const { id, value } = e.target as HTMLInputElement;
    return setForm((prev) => ({ ...prev, [id]: value }));
  }

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-medium my-2">{formTitle}</h3>
      <form
        onSubmit={(e) => onSubmit(e, form)}
        className="flex flex-col  max-w-lg md:max-w-4xl gap-2 items-center border-t py-2"
      >

        <label htmlFor="name">Nom</label>
        <input
        type="text"
        className="mt-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
        id="name"
        value={form.name}
        name="userName"
        onChange={updateForm}
        required
        />


        <label htmlFor="address">Adresse</label>
        <input
        type="text"
        className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
        id="address"
        value={form.address}
        onChange={updateForm}
        required
        />

        <label htmlFor="origin">Site web</label>
        <input
        type="text"
        className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
        id="url"
        value={form.url}
        onChange={updateForm}
        />

        <div className="flex justify-around my-4 min-w-full">
        <input
            type="submit"
            value="Soumettre"
            className="cursor-pointer border rounded-md border-darkLight p-2 bg-darkBlue shadow-sm shadow-darkLight"
        />
        <NavLink
            to="/"
            className="cursor-pointer border rounded-md border-darkLight p-2 bg-darkBlue shadow-sm shadow-darkLight"
        >
            Annuler
        </NavLink>
        </div>
      </form>
    </div>
  );
}

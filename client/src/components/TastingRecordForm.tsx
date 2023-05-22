import React, { useState } from "react";
import TastingRecordInterface from "./TastingRecordInterface";
import { NavLink } from "react-router-dom";

type Props = {
  formTitle: string;
  initialState: TastingRecordInterface;
  onSubmit: (
    e: React.FormEvent,
    newRecord: TastingRecordInterface
  ) => Promise<void>;
};

export default function TastingRecordForm({
  formTitle,
  initialState,
  onSubmit,
}: Props) {
  const [form, setForm] = useState<TastingRecordInterface>(initialState);

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
        className="flex flex-col md:grid grid-cols-3 max-w-lg md:max-w-4xl gap-2 items-center border-t py-2"
      >
        <div className=" col-span-3">
          <label htmlFor="userName">Votre nom</label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
            id="userName"
            value={form.userName}
            name="userName"
            onChange={updateForm}
            required
          />
        </div>

        <div>
          <label htmlFor="coffeeName">Nom du café</label>
          <input
            type="text"
            className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
            id="coffeeName"
            value={form.coffeeName}
            onChange={updateForm}
            required
          />

          <label htmlFor="origin">Origine</label>
          <input
            type="text"
            className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
            id="origin"
            value={form.origin}
            onChange={updateForm}
            required
          />

          <label htmlFor="process">Procédé</label>
          <select
            name="process"
            className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
            id="process"
            value={form.process}
            onChange={updateForm}
            required
          >
            <option disabled selected value="">
              -- Sélectionnez --
            </option>
            <option value="Lavé">Lavé</option>
            <option value="Honey">Honey</option>
            <option value="Naturel">Naturel</option>
          </select>

          <label>Degré de torréfaction</label>
          <select
            name="roast"
            className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
            id="roast"
            value={form.roast}
            onChange={updateForm}
            required
          >
            <option disabled selected value="">
              -- Sélectionnez --
            </option>
            <option value="Brun">Brun</option>
            <option value="Medium">Medium</option>
            <option value="Noir">Noir</option>
          </select>
        </div>
        <div className="col-span-2 self-start h-full space-y-1">
          <div>
            <label htmlFor="roaster">Torréfacteur</label>
            <input
              type="text"
              className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
              id="roaster"
              value={form.roaster}
              onChange={updateForm}
              required
            />
          </div>
          <div>
            <label htmlFor="roasterNotes">Notes de goût du torréfacteur</label>
            <textarea
              className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
              id="roasterNotes"
              value={form.roasterNotes}
              onChange={updateForm}
            />
          </div>
        </div>
        <div className="">
          <h4 className="text-xl font-medium text-center mt-4">Arôme</h4>
          <label>Quantité</label>
          <input
            type="number"
            id="aromaQuantity"
            className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
            min={0}
            max={5}
            value={form.aromaQuantity}
            onChange={updateForm}
            required
          />
          <label>Qualité</label>
          <input
            type="number"
            id="aromaQuality"
            className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
            min={0}
            max={5}
            value={form.aromaQuality}
            onChange={updateForm}
            required
          />
          <label>Notes</label>
          <textarea
            id="aromaNotes"
            className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
            value={form.aromaNotes}
            onChange={updateForm}
          />
        </div>
        <div className="">
          <h4 className="text-xl font-medium text-center mt-4">Acidité</h4>
          <label>Quantité</label>
          <input
            type="number"
            id="acidityQuantity"
            className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
            min={0}
            max={5}
            value={form.acidityQuantity}
            onChange={updateForm}
            required
          />
          <label>Qualité</label>
          <input
            type="number"
            id="acidityQuality"
            className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
            min={0}
            max={5}
            value={form.acidityQuality}
            onChange={updateForm}
            required
          />
          <label>Notes</label>
          <textarea
            id="acidityNotes"
            className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
            value={form.acidityNotes}
            onChange={updateForm}
          />
        </div>
        <div>
          <h4 className="text-xl font-medium text-center mt-4">Douceur</h4>
          <label>Quantité</label>
          <input
            type="number"
            id="sweetnessQuantity"
            className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
            min={0}
            max={5}
            value={form.sweetnessQuantity}
            onChange={updateForm}
            required
          />
          <label>Qualité</label>
          <input
            type="number"
            id="sweetnessQuality"
            className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
            min={0}
            max={5}
            value={form.sweetnessQuality}
            onChange={updateForm}
            required
          />
          <label>Notes</label>
          <textarea
            id="sweetnessNotes"
            className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
            value={form.sweetnessNotes}
            onChange={updateForm}
          />
        </div>
        <div className="flex col-span-3 justify-around">
          <div>
            <h4 className="text-xl font-medium text-center mt-4">Corps</h4>
            <label>Quantité</label>
            <input
              type="number"
              id="bodyQuantity"
              className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
              min={0}
              max={5}
              value={form.bodyQuantity}
              onChange={updateForm}
              required
            />
            <label>Qualité</label>
            <input
              type="number"
              id="bodyQuality"
              className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
              min={0}
              max={5}
              value={form.bodyQuality}
              onChange={updateForm}
              required
            />
            <label>Notes</label>
            <textarea
              id="bodyNotes"
              className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
              value={form.bodyNotes}
              onChange={updateForm}
            />
          </div>
          <div>
            <h4 className="text-xl font-medium text-center mt-4">Finale</h4>
            <label>Quantité</label>
            <input
              type="number"
              id="finishQuantity"
              className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
              min={0}
              max={5}
              value={form.finishQuantity}
              onChange={updateForm}
              required
            />
            <label>Qualité</label>
            <input
              type="number"
              id="finishQuality"
              className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
              min={0}
              max={5}
              value={form.finishQuality}
              onChange={updateForm}
              required
            />
            <label>Notes</label>
            <textarea
              id="finishNotes"
              className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
              value={form.finishNotes}
              onChange={updateForm}
            />
          </div>
        </div>

        <div className="row-start-5 col-start-2">
          <h4 className="text-xl font-medium text-center mt-4">
            Notes globales
          </h4>
          <label>Notes de goût</label>
          <textarea
            id="flavourNotes"
            className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
            value={form.flavourNotes}
            onChange={updateForm}
          />
          <label>Note globale</label>
          <input
            type="number"
            id="overallScore"
            className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
            min={0}
            max={10}
            value={form.overallScore}
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
        </div>
      </form>
    </div>
  );
}

import React, { useState } from 'react';
import CoffeeRecordInterface from './CoffeeRecordInterface';
import { NavLink } from 'react-router-dom';

type Props = {
    formTitle: string;
    initialState: CoffeeRecordInterface;
    onSubmit: (e: any, newRecord: CoffeeRecordInterface) => Promise<void>;
};

export default function CoffeeRecordForm({ formTitle, initialState, onSubmit }: Props) {
    const [form, setForm] = useState<CoffeeRecordInterface>(initialState);

    // These methods will update the state properties.
    function updateForm(value: any) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-xl font-medium my-2">{formTitle}</h3>
            <form
                onSubmit={(e) => onSubmit(e, form)}
                className="flex flex-col md:grid grid-cols-3 max-w-lg md:max-w-4xl gap-2 items-center border-t py-2"
            >
                <div className=' col-span-3'>
                    <label htmlFor="userName">Votre nom</label>
                    <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        id="userName"
                        value={form.userName}
                        onChange={(e) => updateForm({ userName: e.target.value })}
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
                        onChange={(e) => updateForm({ coffeeName: e.target.value })}
                        required
                    />

                    <label htmlFor="origin">Origine</label>
                    <input
                        type="text"
                        className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        id="coffeeName"
                        value={form.origin}
                        onChange={(e) => updateForm({ origin: e.target.value })}
                        required
                    />

                    <label htmlFor="process">Procédé</label>
                    <select
                        name="process"
                        className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        id="process"
                        value={form.process}
                        onChange={(e) => updateForm({ process: e.target.value })}
                        required
                    >
                        <option disabled selected value="">
                            {' '}-- Sélectionnez --{' '}
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
                        onChange={(e) => updateForm({ roast: e.target.value })}
                        required
                    >
                        <option disabled selected value="">
                            {' '}-- Sélectionnez --{' '}
                        </option>
                        <option value="Brun">Brun</option>
                        <option value="Medium">Medium</option>
                        <option value="Noir">Noir</option>
                    </select>
                </div>
                <div className='col-span-2 self-start h-full space-y-1'>
                    <div>
                        <label htmlFor="roaster">Torréfacteur</label>
                        <input
                            type="text"
                            className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                            id="roaster"
                            value={form.roaster}
                            onChange={(e) => updateForm({ roaster: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="roasterNotes">Notes de goût du torréfacteur</label>
                        <textarea
                            className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                            id="roaster"
                            value={form.roasterNotes}
                            onChange={(e) => updateForm({ roasterNotes: e.target.value })}
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
                        onChange={(e) => updateForm({ aromaQuantity: e.target.value })}
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
                        onChange={(e) => updateForm({ aromaQuality: e.target.value })}
                        required
                    />
                    <label>Notes</label>
                    <textarea
                        id="aromaNotes"
                        className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        value={form.aromaNotes}
                        onChange={(e) => updateForm({ aromaNotes: e.target.value })}
                    />
                </div>
                <div className=''>
                    <h4 className="text-xl font-medium text-center mt-4">Acidité</h4>
                    <label>Quantité</label>
                    <input
                        type="number"
                        id="acidityQuantity"
                        className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        min={0}
                        max={5}
                        value={form.acidityQuantity}
                        onChange={(e) => updateForm({ acidityQuantity: e.target.value })}
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
                        onChange={(e) => updateForm({ acidityQuality: e.target.value })}
                        required
                    />
                    <label>Notes</label>
                    <textarea
                        id="acidityNotes"
                        className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        value={form.acidityNotes}
                        onChange={(e) => updateForm({ acidityNotes: e.target.value })}
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
                        onChange={(e) => updateForm({ sweetnessQuantity: e.target.value })}
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
                        onChange={(e) => updateForm({ sweetnessQuality: e.target.value })}
                        required
                    />
                    <label>Notes</label>
                    <textarea
                        id="sweetnessNotes"
                        className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        value={form.sweetnessNotes}
                        onChange={(e) => updateForm({ sweetnessNotes: e.target.value })}
                    />
                </div>
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
                        onChange={(e) => updateForm({ bodyQuantity: e.target.value })}
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
                        onChange={(e) => updateForm({ bodyQuality: e.target.value })}
                        required
                    />
                    <label>Notes</label>
                    <textarea
                        id="bodyNotes"
                        className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        value={form.bodyNotes}
                        onChange={(e) => updateForm({ bodyNotes: e.target.value })}
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
                        onChange={(e) => updateForm({ finishQuantity: e.target.value })}
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
                        onChange={(e) => updateForm({ finishQuality: e.target.value })}
                        required
                    />
                    <label>Notes</label>
                    <textarea
                        id="finishNotes"
                        className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        value={form.finishNotes}
                        onChange={(e) => updateForm({ finishNotes: e.target.value })}
                    />
                </div>

                <div className='row-start-5 col-start-2'>
                    <h4 className="text-xl font-medium text-center mt-4">Notes globales</h4>
                    <label>Notes de goût</label>
                    <textarea
                        id="flavourNotes"
                        className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        value={form.flavourNotes}
                        onChange={(e) => updateForm({ flavourNotes: e.target.value })}
                    />
                    <label>Note globale</label>
                    <input
                        type="number"
                        id="overallScore"
                        className="my-1 block w-full px-3 py-2 bg-darkLight border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        min={0}
                        max={10}
                        value={form.overallScore}
                        onChange={(e) => updateForm({ overallScore: e.target.value })}
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

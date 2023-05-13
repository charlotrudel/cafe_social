import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Create() {
    const [form, setForm] = useState({
        userName: '',
        coffeeName: '',
        roaster: '',
        roast: '',
        aromaQuantity: 0,
        aromaQuality: 0,
        aromaNotes: '',
        acidityQuantity: 0,
        acidityQuality: 0,
        acidityNotes: '',
        sweetnessQuantity: 0,
        sweetnessQuality: 0,
        sweetnessNotes: '',
        bodyQuantity: 0,
        bodyQuality: 0,
        bodyNotes: '',
        finishQuantity: 0,
        finishQuality: 0,
        finishNotes: '',
        flavourNotes: '',
        overallScore: 0,
    });
    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value: any) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e: any) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newRecord = { ...form };

        await fetch('http://localhost:5050/record', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRecord),
        }).catch((error) => {
            window.alert(error);
            return;
        });

        setForm({
            userName: '',
            coffeeName: '',
            roaster: '',
            roast: '',
            aromaQuantity: 0,
            aromaQuality: 0,
            aromaNotes: '',
            acidityQuantity: 0,
            acidityQuality: 0,
            acidityNotes: '',
            sweetnessQuantity: 0,
            sweetnessQuality: 0,
            sweetnessNotes: '',
            bodyQuantity: 0,
            bodyQuality: 0,
            bodyNotes: '',
            finishQuantity: 0,
            finishQuality: 0,
            finishNotes: '',
            flavourNotes: '',
            overallScore: 0,
        });
        navigate('/');
    }

    // This following section will display the form that takes the input from the user.
    return (
        <div className="flex flex-col items-center">
            <h3 className="text-xl font-medium my-2">Nouveau café</h3>
            <form onSubmit={onSubmit} className="flex flex-col max-w-lg gap-2 items-center border-t py-2">
                <div>
                    <label htmlFor="userName">Votre nom</label>
                    <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        id="userName"
                        value={form.userName}
                        onChange={(e) => updateForm({ userName: e.target.value })}
                        required
                    />
                    <label htmlFor="coffeeName">Nom du café</label>
                    <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        id="coffeeName"
                        value={form.coffeeName}
                        onChange={(e) => updateForm({ coffeeName: e.target.value })}
                        required
                    />
                </div>
                <div className="">
                    <label htmlFor="roaster">Torréfacteur</label>
                    <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        id="roaster"
                        value={form.roaster}
                        onChange={(e) => updateForm({ roaster: e.target.value })}
                        required
                    />
                </div>
                <div className="self-start">
                    <label>Degré de torréfaction</label>
                    <select
                        name="roast"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        id="roast"
                        value={form.roast}
                        onChange={(e) => updateForm({ roast: e.target.value })}
                        required
                    >
                        <option disabled selected value="">
                            {' '}
                            -- Sélectionnez --{' '}
                        </option>
                        <option value="Brun">Brun</option>
                        <option value="Medium">Medium</option>
                        <option value="Noir">Noir</option>
                    </select>
                </div>
                <div className="">
                    <h4 className="text-xl font-medium text-center mt-4">Arôme</h4>
                    <label>Quantité</label>
                    <input
                        type="number"
                        id="aromaQuantity"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
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
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        min={0}
                        max={5}
                        value={form.aromaQuality}
                        onChange={(e) => updateForm({ aromaQuality: e.target.value })}
                        required
                    />
                    <label>Notes</label>
                    <input
                        type="text"
                        id="aromaNotes"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        value={form.aromaNotes}
                        onChange={(e) => updateForm({ aromaNotes: e.target.value })}
                    />

                    <h4 className="text-xl font-medium text-center mt-4">Acidité</h4>
                    <label>Quantité</label>
                    <input
                        type="number"
                        id="acidityQuantity"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
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
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        min={0}
                        max={5}
                        value={form.acidityQuality}
                        onChange={(e) => updateForm({ acidityQuality: e.target.value })}
                        required
                    />
                    <label>Notes</label>
                    <input
                        type="text"
                        id="acidityNotes"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        value={form.acidityNotes}
                        onChange={(e) => updateForm({ acidityNotes: e.target.value })}
                    />

                    <h4 className="text-xl font-medium text-center mt-4">Douceur</h4>
                    <label>Quantité</label>
                    <input
                        type="number"
                        id="sweetnessQuantity"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
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
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        min={0}
                        max={5}
                        value={form.sweetnessQuality}
                        onChange={(e) => updateForm({ sweetnessQuality: e.target.value })}
                        required
                    />
                    <label>Notes</label>
                    <input
                        type="text"
                        id="sweetnessNotes"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        value={form.sweetnessNotes}
                        onChange={(e) => updateForm({ sweetnessNotes: e.target.value })}
                    />

                    <h4 className="text-xl font-medium text-center mt-4">Corps</h4>
                    <label>Quantité</label>
                    <input
                        type="number"
                        id="bodyQuantity"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
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
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        min={0}
                        max={5}
                        value={form.bodyQuality}
                        onChange={(e) => updateForm({ bodyQuality: e.target.value })}
                        required
                    />
                    <label>Notes</label>
                    <input
                        type="text"
                        id="bodyNotes"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        value={form.bodyNotes}
                        onChange={(e) => updateForm({ bodyNotes: e.target.value })}
                    />

                    <h4 className="text-xl font-medium text-center mt-4">Finale</h4>
                    <label>Quantité</label>
                    <input
                        type="number"
                        id="finishQuantity"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
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
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        min={0}
                        max={5}
                        value={form.finishQuality}
                        onChange={(e) => updateForm({ finishQuality: e.target.value })}
                        required
                    />
                    <label>Notes</label>
                    <input
                        type="text"
                        id="finishNotes"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        value={form.finishNotes}
                        onChange={(e) => updateForm({ finishNotes: e.target.value })}
                    />
                </div>

                <div>
                    <h4 className="text-xl font-medium text-center mt-4">Global</h4>
                    <label>Notes de goût</label>
                    <input
                        type="text"
                        id="flavourNotes"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        value={form.flavourNotes}
                        onChange={(e) => updateForm({ flavourNotes: e.target.value })}
                    />
                    <label>Note globale</label>
                    <input
                        type="number"
                        id="overallScore"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-coffeeSecond focus:ring-1 focus:ring-coffeeSecond"
                        min={0}
                        max={10}
                        value={form.overallScore}
                        onChange={(e) => updateForm({ overallScore: e.target.value })}
                    />
                </div>
                <div className="my-4">
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

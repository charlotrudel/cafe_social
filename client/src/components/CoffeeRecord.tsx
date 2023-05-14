import { Link } from 'react-router-dom';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import CoffeeRecordInterface from './CoffeeRecordInterface';

type Props = {
    record: CoffeeRecordInterface;
    deleteRecord: () => Promise<void>;
};

export default function CoffeeRecord({ record, deleteRecord }: Props) {
    return (
        <div className="flex flex-col border border-black rounded-md bg-coffeeSecond self-center max-w-2xl p-2 sm:p-4 m-1 sm:m-4 text-sm sm:text-base relative">
            <button
                className="absolute top-0 right-0 p-1"
                onClick={() => {
                    deleteRecord();
                }}
            >
                <XMarkIcon className="w-8" />
            </button>
            <div className="font-semibold mb-1">{record.userName}</div>
            <div className="">Nom : {record.coffeeName}</div>
            <div className="">Torréfacteur : {record.roaster}</div>
            <div className="mb-2">Degré de torréfaction : {record.roast}</div>
            <div className="grid grid-cols-5 border border-stone-700 text-center ">
                <div className="border-b border-r border-stone-700"></div>
                <div className="border border-stone-700">Quantité</div>
                <div className="border border-stone-700">Qualité</div>
                <div className="border border-stone-700 col-span-2">Notes</div>
                <div className="border border-stone-700">Arôme</div>
                <div className="align-middle border border-stone-700">{record.aromaQuantity}</div>
                <div className="border border-stone-700">{record.aromaQuality}</div>
                <div className="text-left col-span-2 p-1 border border-stone-700">{record.aromaNotes}</div>
                <div className="border border-stone-700">Acidité</div>
                <div className="border border-stone-700">{record.acidityQuantity}</div>
                <div className="border border-stone-700">{record.acidityQuality}</div>
                <div className="text-left col-span-2 p-1 border border-stone-700">{record.acidityNotes}</div>
                <div className="border border-stone-700">Douceur</div>
                <div className="border border-stone-700">{record.sweetnessQuantity}</div>
                <div className="border border-stone-700">{record.sweetnessQuality}</div>
                <div className="text-left col-span-2 p-1 border border-stone-700">{record.sweetnessNotes}</div>
                <div className="border border-stone-700">Corps</div>
                <div className="border border-stone-700">{record.bodyQuantity}</div>
                <div className="border border-stone-700">{record.bodyQuality}</div>
                <div className="text-left col-span-2 p-1 border border-stone-700">{record.bodyNotes}</div>
                <div className="border border-stone-700">Finale</div>
                <div className="border border-stone-700">{record.finishQuantity}</div>
                <div className="border border-stone-700">{record.finishQuality}</div>
                <div className="text-left col-span-2 p-1 border border-stone-700">{record.finishNotes}</div>
            </div>
            <div className="my-2">Notes de goût :</div>
            <p>{record.flavourNotes}</p>
            <div className="mt-2">Note globale : {record.overallScore}</div>

            <div className="flex self-end gap-2 mt-2">
                <Link className="" to={`/edit/${record._id}`}>
                    Modifier
                </Link>
            </div>
        </div>
    );
}

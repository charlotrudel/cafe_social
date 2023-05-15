import { Link } from 'react-router-dom';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import CoffeeRecordInterface from './CoffeeRecordInterface';

type Props = {
    record: CoffeeRecordInterface;
    deleteRecord: () => Promise<void>;
};

export default function CoffeeRecord({ record, deleteRecord }: Props) {
    return (
        <div className="flex flex-col border border-darkLight rounded-md bg-darkBlue  p-2 sm:p-4 m-2 sm:m-4 text-sm sm:text-base relative">
            <button
                className="absolute top-0 right-0 p-1"
                onClick={() => {
                    deleteRecord();
                }}
            >
                <XMarkIcon className="w-8" />
            </button>
            <div className="font-semibold mb-1">{record.userName}</div>
            <div className='flex justify-between'>
                <div className='p-2 mr-2 basis-2/5 border-2 border-darkGray rounded-xl'>
                    <div className="">Nom : {record.coffeeName}</div>
                    <div className="">Torréfacteur : {record.roaster}</div>
                    <div >{record.roast}</div>
                    <div>{record.origin}</div>
                    <div className="mb-2">{record.process}</div>
                </div>
                <div className='border-2 border-darkGray rounded-xl p-2 basis-3/5'>
                    <div className="my-2 font-semibold">Note globale : {record.overallScore}/10</div>
                    <p>{record.flavourNotes}</p>
                </div>
            </div>

            <div className="flex flex-col ">
                <div className='border-2 border-darkGray rounded-xl p-2 my-2'>
                    <h4 className='font-medium text-lg'>Arôme</h4>
                    <div className='flex justify-around mt-2 mb-4'>
                        <div className=''>Quantité : {record.aromaQuantity}/5</div>
                        <div>Qualité : {record.aromaQuality}/5</div>
                    </div>
                    <p className=''>{record.aromaNotes}</p>
                </div>
                <div className='border-2 border-darkGray rounded-xl p-2 my-2'>
                    <h4 className='font-medium text-lg'>Acidité</h4>
                    <div className='flex justify-around mt-2 mb-4'>
                        <div className=''>Quantité : {record.acidityQuantity}/5</div>
                        <div>Qualité : {record.acidityQuality}/5</div>
                    </div>
                    <p className=''>{record.acidityNotes}</p>
                </div>
                <div className='border-2 border-darkGray rounded-xl p-2 my-2'>
                    <h4 className='font-medium text-lg'>Douceur</h4>
                    <div className='flex justify-around mt-2 mb-4'>
                        <div className=''>Quantité : {record.sweetnessQuantity}/5</div>
                        <div>Qualité : {record.sweetnessQuality}/5</div>
                    </div>
                    <p className=''>{record.sweetnessNotes}</p>
                </div>
                <div className='border-2 border-darkGray rounded-xl p-2 my-2'>
                    <h4 className='font-medium text-lg'>Corps</h4>
                    <div className='flex justify-around mt-2 mb-4'>
                        <div className=''>Quantité : {record.bodyQuantity}/5</div>
                        <div>Qualité : {record.bodyQuality}/5</div>
                    </div>
                    <p className=''>{record.bodyNotes}</p>
                </div>
                <div className='border-2 border-darkGray rounded-xl p-2 my-2'>
                    <h4 className='font-medium text-lg'>Finale</h4>
                    <div className='flex justify-around mt-2 mb-4'>
                        <div className=''>Quantité : {record.finishQuantity}/5</div>
                        <div>Qualité : {record.finishQuality}/5</div>
                    </div>
                    <p className=''>{record.finishNotes}</p>
                </div>
            </div>
            <div className="flex self-end gap-2 mt-2">
                <Link className="" to={`/edit/${record._id}`}>
                    Modifier
                </Link>
            </div>
        </div>
    );
}

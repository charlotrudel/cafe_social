export default interface TastingRecordInterface {
    _id?: number;
    userName: string;
    coffeeName: string;
    origin: string;
    process: string;
    roaster: string;
    roasterNotes: string;
    roast: string;
    aromaQuantity: number;
    aromaQuality: number;
    aromaNotes: string;
    acidityQuantity: number;
    acidityQuality: number;
    acidityNotes: string;
    sweetnessQuantity: number;
    sweetnessQuality: number;
    sweetnessNotes: string;
    bodyQuantity: number;
    bodyQuality: number;
    bodyNotes: string;
    finishQuantity: number;
    finishQuality: number;
    finishNotes: string;
    flavourNotes: string;
    overallScore: number;
}

export const emptyRecord = {
    userName: '',
    coffeeName: '',
    origin: '',
    process: '',
    roaster: '',
    roasterNotes: '',
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
};

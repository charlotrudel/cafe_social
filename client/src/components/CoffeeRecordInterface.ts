export default interface CoffeeRecordInterface {
    _id?: number;
    userName: string;
    coffeeName: string;
    roaster: string;
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

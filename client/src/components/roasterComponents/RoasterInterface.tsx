export default interface RoasterInterface {
    _id?: number,
    name: string,
    address: string,
    url: string
}

export const emptyRecord = {
    name: '',
    address: '',
    url: ''
};

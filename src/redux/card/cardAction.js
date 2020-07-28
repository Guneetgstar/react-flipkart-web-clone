import { CARD_LENGTH } from './cardType'

export const cardAction = (data) =>{
    console.log("data=-----------------------REDUCER`======>", data);
    return{
        type: CARD_LENGTH,
        payload: data
    }
}

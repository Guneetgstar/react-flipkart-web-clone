// import { cardAction } from './cardAction';
import { CARD_LENGTH } from './cardType';

const initState ={
    num: [].length,
    cardData: []
}

export const cardReducer = (state=initState, action) => {
    console.log("action------------->", action);
    switch(action.type){
        case CARD_LENGTH:return{
            ...state,
            num: (action.payload || []).length,
            cardData: action.payload
        }
        default:return state;
    }
}

// export default cardReducer;
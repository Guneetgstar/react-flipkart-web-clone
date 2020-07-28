import { createStore } from 'redux'
import { cardReducer } from './card/cardReducer';

export const store = createStore(cardReducer);

// export default store;
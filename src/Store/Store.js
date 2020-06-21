import { createStore } from 'redux';

import { pathState } from '../Reducers/state';


const initialState = {
    history: null,
    id: null,
    tag: null,
};

export const store = createStore(pathState, initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import {INSERT_GLOBAL_FRONT1_OBJECT} from '../sections/micro1Action'
const initialState = {
       nombre: 'Usuario Global',
       apellido: 'Apellido usuario Global'
}


export const micro1Global = (state = initialState,action) => {
    switch (action.type) {
        case INSERT_GLOBAL_FRONT1_OBJECT:
            return {...state, globalValue: action.payload};
        default: return state;
    }
}
import {INSERT_MICRO_FRONT1_OBJECT} from '../sections/micro1Action'
import {INSERT_GLOBAL_FRONT1_OBJECT} from '../sections/micro1Action'
const initialState = {
    microValue: {
       nombre: 'usuario',
       apellido: 'default value'
   },
    globalValue : {
        nombre: 'global user',
        apellido: 'default global'
    }

}


export const micro1 = (state = initialState,action) => {
    switch (action.type) {
        case INSERT_MICRO_FRONT1_OBJECT:
            return {...state,  microValue: action.payload};
        case INSERT_GLOBAL_FRONT1_OBJECT:
            return {...state, globalValue: action.payload};
        default: return state;
    }
}
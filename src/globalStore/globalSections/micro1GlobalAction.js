import { GlobalStore } from 'redux-micro-frontend';



export const INSERT_GLOBAL_FRONT1_OBJECT = 'INSERT_GLOBAL_FRONT1_OBJECT';

export const insertGlobalInfo = (value) => {
    const globalStore = GlobalStore.Get();
    debugger;
    let action = {
        type : INSERT_GLOBAL_FRONT1_OBJECT,
        payload: value
    }
    globalStore.DispatchAction('App1', action);
}
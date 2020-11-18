export const INSERT_GLOBAL_FRONT1_OBJECT = 'INSERT_GLOBAL_FRONT1_OBJECT';

export const insertGlobalInfo = (value) => {
    return {
        type : INSERT_GLOBAL_FRONT1_OBJECT,
        payload: value
    }
}
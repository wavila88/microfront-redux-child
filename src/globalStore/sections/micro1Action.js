

export const INSERT_MICRO_FRONT1_OBJECT = 'INSERT_MICRO_FRONT1';
export const INSERT_GLOBAL_FRONT1_OBJECT = 'INSERT_GLOBAL_FRONT1_OBJECT';


export const insertMicro = (value) => {
    return {
        type : INSERT_MICRO_FRONT1_OBJECT,
        payload: value
    }
}


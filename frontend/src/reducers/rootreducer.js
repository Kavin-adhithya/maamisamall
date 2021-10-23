const initialState = {

}

const rootreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL_STATE':
            return {
                ...state,
            }
        default:
            return state;
    }
};

export default rootreducer;
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return state + action.payload;
        case 'changeState':
            return  {
                ...state,
                appName:action.data
            };
        default:
            return state;
    }
};

export default  reducer
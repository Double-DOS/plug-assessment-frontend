const initState = {
    campaigns: []
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'FETCH_PLUGS') {
        return {
            ...state,
            campaigns: action.campaigns
        }
    }
    return state;
}

export default rootReducer;
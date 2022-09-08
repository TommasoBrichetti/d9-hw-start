const initialState = {
    jobs: {
        content: []
    }
}

const mainReducer = ( state = initialState, action) => {

    switch (action.type) {

        case 'ADD_TO_FAV':
            return{
                ...state,
                jobs: {
                    ...state.jobs,
                    content: [...state.jobs.content, action.payload]
                }
            }
            case 'REMOVE_TO_FAV':
                return{
                    ...state,
                    jobs: {
                        ...state.jobs,
                        content: state.jobs.content.filter((job,i) => i !== action.payload)
                    }
                }
        default: return state;
    }
}
export default mainReducer
import { ADD_FILTERS, SELECT_FILTER_ITEM, MORE_FILTER_ITEMS } from '../actions/filterActions';

const initialState = {
    records:{},
    more: false
}

const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FILTERS: 
            return {
                ...state, 
                records: action.filters
            };

        case SELECT_FILTER_ITEM: 
            return {
                ...state, 
                records: {
                    ...state.records,
                    [action.payload.type]: state.records[action.payload.type].map(item => {
                        return {
                            ...item,
                            selected: item.key === action.payload.key ? !item.selected : item.selected
                        }
                    })
                }
            };
        case MORE_FILTER_ITEMS: 
            return {
                ...state, 
                more: action.payload.type
            };
        default: return { ...state };
    }
};

export default filterReducer;
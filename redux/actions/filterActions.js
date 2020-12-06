import { useQuery } from "react-query";

//Action Types
export const ADD_FILTERS = "INCREMENT_COUNTER";
export const SELECT_FILTER_ITEM = "SELECT_FILTER_ITEM";
export const MORE_FILTER_ITEMS = 'MORE_FILTER_ITEMS';

//Action Creator
export const addFilters = (filters) => ({
   type: ADD_FILTERS,
   filters
});

export const setFilterMore = (type) => ({
   type: MORE_FILTER_ITEMS,
   payload: {
      type
   }
});

export const selectFilter = (type, key) => ({
   type: SELECT_FILTER_ITEM,
   payload: {
      type, 
      key
   }
});


export const fetchFilters = () => dispatch => {
   return fetch('/api/filters')
   .then(res => res.json())
   .then(filters => dispatch(addFilters(filters)))
}
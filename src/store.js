import {createStore, combineReducers} from 'redux';

import JobsReducer from './reducers/jobsReducer';

const rootReducer = combineReducers({
    jobReducer: JobsReducer,
});

export default createStore(rootReducer);
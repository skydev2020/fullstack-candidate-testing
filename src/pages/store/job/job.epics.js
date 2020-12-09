import { combineEpics, select } from 'redux-most';
import {orderBy} from 'lodash';
import * as most from 'most';
import {
  setJobDataSuccess,
  SET_JOB_DATA,
  SET_JOB_FILTERED_DATA,
  setJobFilteredDataSuccess,
  SORT_JOB_DATA,
  sortJobDataSuccess,
} from './job.actions';

const setJobDataEpic = ($actions, store) =>
  $actions.thru(select(SET_JOB_DATA)).flatMap(action => {
    return most
      .fromPromise(Promise.resolve())
      .flatMap(() => {
        return most.of(setJobDataSuccess(action.payload));
      })
      .recoverWith(error => {
        return most.of(most.empty());
      });
  });

const setJobFilteredDataEpic = ($actions, store) =>
  $actions.thru(select(SET_JOB_FILTERED_DATA)).flatMap(action => {
    const { jobsList } = store.getState().job;
    const filteredData = [];
    for(const job of jobsList) {
      if (job.name.toLowerCase().includes(action.payload) || job.job_title.toLowerCase().includes(action.payload)) {
        filteredData.push(job);
      }
    }
    return most.of(setJobFilteredDataSuccess(filteredData));
  });

const sortJobDataEpic = ($actions, store) =>
  $actions.thru(select(SORT_JOB_DATA)).flatMap(action => {
    const { jobsList } = store.getState().job;
    const sortFnArray = [];
    const sortTypeArray = [];
    action.payload.forEach(sort => {
      if (sort.key === 'Location' && sort.sortByVal) {
        sortFnArray.push((obj)=>{
          return obj.items[0].city;
        });
        sortTypeArray.push(sort.sortByVal);
      }
      else if (sort.key === 'Role' && sort.sortByVal) {
        sortFnArray.push((obj)=>{
          return obj.items[0].job_title;
        });
        sortTypeArray.push(sort.sortByVal);
      }
      else if (sort.key === 'Experience' && sort.sortByVal) {
        sortFnArray.push((obj)=>{
          return obj.items[0].experience;
        });
        sortTypeArray.push(sort.sortByVal);
      }
    });
    let jobs  = orderBy(jobsList, sortFnArray,  sortTypeArray);
    return most.of(sortJobDataSuccess(jobs));
  });

export default combineEpics([
  setJobDataEpic,
  setJobFilteredDataEpic,
  sortJobDataEpic,
]);

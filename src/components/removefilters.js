import React from 'react';
import { connect } from "react-redux";
import closebtn_blue from './ui_img/closebtn_blue.svg';

const RemoveFilters = (props) => {
    const jobs_filtered_back = props.jobs_filtered_back;
    const jobs_back = props.jobs_back;
    const setJobs = props.setJobs;
    const setJobsFiltered = props.setJobsFiltered;

    const removeFilters = () => {
        const jobscount = jobs_back.reduce((acc, el) => acc + el.total_jobs_in_hospital, 0);
        setJobs(jobs_back, jobs_back, jobscount);
        setJobsFiltered([]);
    };

    return (
        <div>
        {jobs_filtered_back.length > 0 ?
         (
            <div className="whiteContainer show-on-desktop">
                <button className="removeFiltersBtn" onClick={removeFilters}>Remove filters <img src={closebtn_blue} alt="remove filters icon" /></button>
            </div>
          )
         : null}
        </div>
    );
};


const mapStateToProps = (state) => ({
    jobs_filtered_back: state.jobReducer.jobs_filtered_back,
    jobs_back: state.jobReducer.jobs_back,
});

const mapDispatchToProps = (dispatch) => ({
    setJobs(jobs, jobs_back, jobs_count){
        dispatch({
            type: "SET_JOBS_DATA",
            jobs: jobs,
            jobs_back: jobs_back, 
            jobs_count: jobs_count,
        });
    }, 
    setJobsFiltered(jobs_filtered_back){
        dispatch({
            type: "SET_JOBS_FILTERED",
            jobs_filtered_back: jobs_filtered_back,
        });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFilters);
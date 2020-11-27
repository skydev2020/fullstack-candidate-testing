import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import Whitebox from './whitebox';

const Jobtype = (props) => {
    const title = 'JOB TYPE';
    const jobs_back = props.jobs_back;
    const setJobs = props.setJobs;
    const setJobsFiltered = props.setJobsFiltered;

    const [jobtype, setJobType] = useState([]);

    const getJobType = () => {
        const url = 'http://localhost:3001/api/job_type';
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setJobType(data);
        });
    };

    const jobFilterByType = (_jobtype) => {
        let jobsfilter = [];
        let jobs_count_new = 0;
    
        for(let j of jobs_back) {
            let jobsfilter_items = [];
            for(let item of j.items) {
                if(item.job_type.includes(_jobtype)){
                    jobsfilter_items.push(item);
                    jobs_count_new = jobs_count_new + 1;
                }
            }
            if(jobsfilter_items.length > 0){
                jobsfilter.push({
                    total_jobs_in_hospital: jobsfilter_items.length,
                    name: j.name,
                    job_title: j.job_title,
                    items: jobsfilter_items
                });
            }
        }
        setJobsFiltered(jobsfilter);
        setJobs(jobsfilter, jobs_back, jobs_count_new);
    };


    useEffect(getJobType, []);

    return (
        <Whitebox title={title} list={jobtype}  modaldata={[]} action={jobFilterByType}/>
    );
};


const mapStateToProps = (state) => ({
    jobs: state.jobReducer.jobs,
    jobs_back: state.jobReducer.jobs_back,
    jobs_count: state.jobReducer.jobs_count,
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

export default connect(mapStateToProps, mapDispatchToProps)(Jobtype);
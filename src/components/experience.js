import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import Whitebox from './whitebox';

const Experience = (props) => {

    const title = 'EXPERIENCE';

    const jobs_back = props.jobs_back;
    const setJobs = props.setJobs;
    const setJobsFiltered = props.setJobsFiltered;

    const [experience, setExperience] = useState([]);

    const jobFilterByExperience = (experience) => {
        let jobsfilter = [];
        let jobs_count_new = 0;
    
        for(let j of jobs_back) {
            let jobsfilter_items = [];
            for(let item of j.items) {
                if(item.experience.includes(experience)){
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

    const getExperiences = () => {
        const url = 'http://localhost:3001/api/experience';
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setExperience(data);
        });
    };
    
    useEffect(getExperiences, []);

    return(
        <Whitebox title={title} list={experience}  modaldata={[]} action={jobFilterByExperience}/>
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
            jobs_count: jobs_count
        });
    }, 
    setJobsFiltered(jobs_filtered_back){
        dispatch({
            type: "SET_JOBS_FILTERED",
            jobs_filtered_back: jobs_filtered_back,
        });
    }, 
});

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
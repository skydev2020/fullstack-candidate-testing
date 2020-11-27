import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import Whitebox from './whitebox';

const Departaments = (props) => {
    const title = 'DEPARTAMENTS';

    const jobs_back = props.jobs_back;
    const setJobs = props.setJobs;
    const setJobsFiltered = props.setJobsFiltered;

    const [departaments, setDepartaments] = useState([]);
    const [departamentsTop10, setDepartamentsTop10] = useState([]); 
   
    const jobFilterByDepartament = (department) => {
        let jobsfilter = [];
        let jobs_count_new = 0;
    
        for(let j of jobs_back) {
            let jobsfilter_items = [];
            for(let item of j.items) {
                if(item.department.includes(department)){
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
    
  

    const getDepartaments = () => {
        const url = 'http://localhost:3001/api/department';
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setDepartaments(data);
            setDepartamentsTop10(data.slice(0,10));
        });
    };
    
    useEffect(getDepartaments, []);

    return (
        <div>
            <Whitebox title={title} list={departamentsTop10} modaldata={departaments} action={jobFilterByDepartament}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    jobs: state.jobReducer.jobs,
    jobs_back: state.jobReducer.jobs_back,
    jobs_count: state.jobReducer.jobs_count
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

export default connect(mapStateToProps, mapDispatchToProps)(Departaments);
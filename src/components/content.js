import React, {useEffect} from 'react';
import './content.css';
import { connect } from "react-redux";
import JobGroup from './jobgroup';
import SortMenu from './sortmenu';

const Content = (props) => {
    const jobs = props.jobs;
    const jobs_count = props.jobs_count;
    const setJobs = props.setJobs;

    const getAllJobs = () => {
        const url = 'http://localhost:3001/api/jobs';
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const jobscount = data.reduce((acc, el) => acc + el.total_jobs_in_hospital, 0);
            setJobs(data, jobscount);
        });
    };

    const openCloseJobContent = (id) => {
        if(document.getElementById(id).style.display !== "block"){
            document.getElementById(id).style.display = "block";
        } else {
            document.getElementById(id).style.display = "none";
        }
    }

    useEffect(getAllJobs, []);  

    return (
        <div className="contentBox">
            <div className="row contentHeader">
                <div className="col-sm-3">
                    <span className="spanBold">{jobs_count}</span> job postings
                </div>
                <div className="col-sm-9 show-on-desktop">
                    <SortMenu />
                </div>
            </div>
            <div className="contentBody">
                    {jobs.map((job, index) =>(
                        <div key={index} className="contentGroupResult">
                            <div className="row contentTitleContainer" onClick={() => openCloseJobContent("jobs_".concat(index))}>
                                <div className="contentAcronym">
                                    {job.name.substring(0,2).toUpperCase()}
                                </div>
                                <div className="contentTitle">{job.total_jobs_in_hospital} jobs for {job.name}</div>
                            </div>
                            <JobGroup jobitems={job.items} index={index}/>
                        </div>
                    ))}
            </div>
        </div>
    );
};


const mapStateToProps = (state) => ({
    jobs: state.jobReducer.jobs,
    jobs_count: state.jobReducer.jobs_count,
});

const mapDispatchToProps = (dispatch) => ({
    setJobs(jobs, jobs_count){
        dispatch({
            type: "SET_JOBS_DATA",
            jobs: jobs,
            jobs_back: jobs, 
            jobs_count: jobs_count
        });
    }, 
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
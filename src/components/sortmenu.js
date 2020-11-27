import React, {useState} from 'react';
import { connect } from "react-redux";
import arrow_top from './ui_img/arrow_top.svg';
import arrow_bottom from './ui_img/arrow_bottom.svg';

const SortMenu = (props) => {
    const jobs = props.jobs;
    const jobs_back = props.jobs_back;
    const jobs_filtered_back = props.jobs_filtered_back;
    const setJobs = props.setJobs;
    
    const [locationState, setLocationState] = useState("default"); //default, asc, desc
    const [roleState, setRoleState] = useState("default"); //default, asc, desc
    const [departamentState, setDepartamentState] = useState("default"); //default, asc, desc
    const [educationState, setEducationState] = useState("default"); //default, asc, desc
    const [experienceState, setExperienceState] = useState("default"); //default, asc, desc

    const sortBy = (criteria) => {
        const jobscount = jobs.reduce((acc, el) => acc + el.total_jobs_in_hospital, 0);
        let jobsorted = [];
        switch (criteria) {
            case "Location":
                if(locationState === "default") {
                    setLocationState("asc");
                    jobsorted = [...jobs].sort((a, b) => (a.items.location < b.items.location) ? 1 : -1);
                } else if(locationState === "asc") {
                    setLocationState("desc");
                    jobsorted = [...jobs].sort((a, b) => (a.items.location > b.items.location) ? 1 : -1);
                } else if(locationState === "desc") {
                    setLocationState("default");
                    jobsorted = jobs_filtered_back.length > 0 ? [...jobs_filtered_back] : [...jobs];
                }
                break;
            case "Role":
                if(roleState === "default") {
                    setRoleState("asc");
                    jobsorted = [...jobs].sort((a, b) => (a.job_title < b.job_title) ? 1 : -1);
                } else if(roleState === "asc") {
                    setRoleState("desc");
                    jobsorted = [...jobs].sort((a, b) => (a.job_title > b.job_title) ? 1 : -1);
                } else if(roleState === "desc") {
                    setRoleState("default");
                    jobsorted = jobs_filtered_back.length > 0 ? [...jobs_filtered_back] : [...jobs];
                }
                break;
            case "Departament":
                if(departamentState === "default") {
                    setDepartamentState("asc");
                    jobsorted = [...jobs].sort((a, b) => (a.items.departament < b.items.departament) ? 1 : -1);
                } else if(departamentState === "asc") {
                    setDepartamentState("desc");
                    jobsorted = [...jobs].sort((a, b) => (a.items.departament > b.items.departament) ? 1 : -1);
                } else if(departamentState === "desc") {
                    setDepartamentState("default");
                    jobsorted = jobs_filtered_back.length > 0 ? [...jobs_filtered_back] : [...jobs];
                }
                break;
            case "Education":
                if(educationState === "default") {
                    setEducationState("asc");
                    jobsorted = [...jobs].sort((a, b) => (a.items.required_skills < b.items.required_skills) ? 1 : -1);
                } else if(educationState === "asc") {
                    setEducationState("desc");
                    jobsorted = [...jobs].sort((a, b) => (a.items.required_skills > b.items.required_skills) ? 1 : -1);
                } else if(educationState === "desc") {
                    setEducationState("default");
                    jobsorted = jobs_filtered_back.length > 0 ? [...jobs_filtered_back] : [...jobs];
                }
                break;
            case "Experience":
                if(experienceState === "default") {
                    setExperienceState("asc");
                    jobsorted = [...jobs].sort((a, b) => (a.items.experience < b.items.experience) ? 1 : -1);
                } else if(experienceState === "asc") {
                    setExperienceState("desc");
                    jobsorted = [...jobs].sort((a, b) => (a.items.experience > b.items.experience) ? 1 : -1);
                } else if(experienceState === "desc") {
                    setExperienceState("default");
                    jobsorted = jobs_filtered_back.length > 0 ? [...jobs_filtered_back] : [...jobs];
                }
                break;
            default:
                break;
        }
        setJobs(jobsorted, jobs_back, jobscount);
    };

    return (
    <ul className="listSortJobs">
        <li className="sortJobsTitle">Sort by</li>
        <li className="sortJobsItem" onClick={() => sortBy("Location")}>
            {locationState !== "default" ? <img src={ locationState === "asc" ? arrow_bottom : arrow_top } alt="sort state icon location"/> : null}Location
        </li>
        <li className="sortJobsItem" onClick={() => sortBy("Role")}>
            {roleState !== "default" ? <img src={ roleState === "asc" ? arrow_bottom : arrow_top } alt="sort state icon role"/> : null}Role
        </li>
        <li className="sortJobsItem" onClick={() => sortBy("Departament")}>
            {departamentState !== "default" ? <img src={ departamentState === "asc" ? arrow_bottom : arrow_top } alt="sort state icon departament"/> : null}Departament
        </li>
        <li className="sortJobsItem" onClick={() => sortBy("Education")}>
            {educationState !== "default" ? <img src={ educationState === "asc" ? arrow_bottom : arrow_top } alt="sort state icon education"/> : null}Education
        </li>
        <li className="sortJobsItem" onClick={() => sortBy("Experience")}>
            {experienceState !== "default" ? <img src={ experienceState === "asc" ? arrow_bottom : arrow_top } alt="sort state icon experience"/> : null}Experience
        </li>
    </ul>
);
};


const mapStateToProps = (state) => ({
    jobs: state.jobReducer.jobs,
    jobs_back: state.jobReducer.jobs_back,
    jobs_count: state.jobReducer.jobs_count,
    jobs_filtered_back: state.jobReducer.jobs_filtered_back
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SortMenu);
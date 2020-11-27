import React from 'react';
import './header.css';
import { connect } from "react-redux";

const Header = (props) => {

    const jobs_saved_count = props.jobs_saved_count;

    const createJob = () => {
        alert("Here goes job creation form");
    };

    return(
        
        <nav className="navbar navbar-expand-lg header-nav-bar">
            <div className="row h-menu">
                <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand brand-he-blue" href="/">HEALTH EXPLORE</a>
                <div className="profile_pic show-on-mobile">
                    JO
                    <span className="notification">{jobs_saved_count}</span>
                </div>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item" role="presentation"><a className="nav-link" href="/">PROFILE</a></li>
                        <li className="nav-item" role="presentation"><a className="nav-link" href="/">JOBS</a></li>
                        <li className="nav-item" role="presentation"><a className="nav-link" href="/">PROFESSIONAL NETWORK</a></li>
                        <li className="nav-item" role="presentation"><a className="nav-link" href="/">LOUNGE</a></li>
                        <li className="nav-item" role="presentation"><a className="nav-link" href="/">SALARY</a></li>
                    </ul>
                    <span className="row ml-auto">
                        <div className="col-sm-6 m-item">
                            <button className="btn header-btn" onClick={createJob}>CREATE JOB</button>
                        </div>
                        <div className="col-sm-2 m-item">
                            <div className="profile_pic show-on-desktop">
                                JO
                                <span className="notification">{jobs_saved_count}</span>
                            </div>
                        </div>
                        <div className="col-sm-4 m-item">
                            <a className="nav-link" href="/">LOGOUT</a>
                        </div>
                        
                    </span>
                </div>
                
            </div>
        </nav>
        
    );
};

const mapStateToProps = (state) => ({
    jobs_saved_count: state.jobReducer.jobs_saved_count,
});

const mapDispatchToProps = (dispatch) => ({
    setJobsSaved(jobs_saved_count) {
        dispatch({
            type: "SET_JOBS_SAVED",
            jobs_saved_count: jobs_saved_count,
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
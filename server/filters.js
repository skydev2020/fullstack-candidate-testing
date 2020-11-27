'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('./server/data/filters.json');
let filters = JSON.parse(rawdata);

module.exports = {
    getJobType    : getJobType,
    getWorkSchedule : getWorkSchedule,
    getExperience    : getExperience,
    getDepartment    : getDepartment
  };

function getJobType() {
    return(filters.job_type);
};

function getWorkSchedule() {
    return(filters.work_schedule);
}

function getExperience() {
    return(filters.experience);
}

function getDepartment() {
    return(filters.department);
}
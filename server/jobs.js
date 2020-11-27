'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('./server/data/jobs.json');
let jobs = JSON.parse(rawdata);

module.exports = {
    all    : getAllJobs,
  };

function getAllJobs() {
    return(jobs);
};

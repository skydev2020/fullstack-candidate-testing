const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors')
const PORT = 3001;
const app = express();
const filters = require('./filters');
const jobs = require('./jobs');

const BASE_URL = '/api'

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get(BASE_URL + '/job_type', function (_, res) {
    res.json(filters.getJobType());
});


app.get(BASE_URL + '/work_schedule', function (_, res) {
    res.json(filters.getWorkSchedule());
});

app.get(BASE_URL + '/experience', function (_, res) {
    res.json(filters.getExperience());
});

app.get(BASE_URL + '/department', function (_, res) {
    res.json(filters.getDepartment());
});

app.get(BASE_URL + '/jobs', function (_, res) {
    res.json(jobs.all());
});


app.listen(PORT, () => {
 console.log("El servidor está inicializado en el puerto 3001");
});
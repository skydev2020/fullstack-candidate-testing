import assert from 'assert';
import { createMocks } from 'node-mocks-http';
import getJobs from '../pages/api/jobs';

describe('/api/jobs', () => {
  it('should get all jobs', async () => {
    const { req, res } = createMocks({ method: 'GET' });
    let jobs = await getJobs(req, res);
    let total = 0;
    jobs.map(job => total += job.total_jobs_in_hospital);
    assert.equal(jobs.length, 20)
    assert.equal(total, 120)
  });
});

describe('/api/jobs', () => {
  it('keyword test: should get 8 jobs', async () => {
    const { req, res } = createMocks({ method: 'GET', body: JSON.stringify({ keyword: 'mono' }) });
    
    let jobs = await getJobs(req, res);
    let total = 0;
    jobs.map(job => total += job.total_jobs_in_hospital);
    assert.equal(jobs.length, 1)
    assert.equal(total, 8)
  });
});

describe('/api/jobs', () => {
  it('filter test: should get 3 jobs', async () => {
    const { req, res } = createMocks({ method: 'GET', body: JSON.stringify({ filters: {'job_type' : "Part-time"} }) });
    
    let jobs = await getJobs(req, res);
    let total = 0;
    jobs.map(job => total += job.total_jobs_in_hospital);
    assert.equal(jobs.length, 17)
    assert.equal(total, 36)
  });
});

describe('/api/jobs', () => {
  it('keyword, filter test: should get 3 jobs', async () => {
    const { req, res } = createMocks({ method: 'GET', body: JSON.stringify({ keyword: 'mono', filters: {'job_type' : "Part-time"} }) });
    
    let jobs = await getJobs(req, res);
    let total = 0;
    jobs.map(job => total += job.total_jobs_in_hospital);
    assert.equal(jobs.length, 1)
    assert.equal(total, 3)
  });
});
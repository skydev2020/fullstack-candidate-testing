// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jslinq from 'jslinq';

import jobs from '../../data/jobs.json';

export default async function getJobs(req, res) {
  let query = {
    keyword: '',
    filters: {},
    sort: {}
  };

  try {
    let params = JSON.parse(req.body);
    query = {
      ...query,
      ...params
    };
  } catch (e) {
    console.error(e);
  }
  
  res.statusCode = 200;

  // @todo: implement filters and search
  // @todo: implement automated tests

  let results = [];
  jobs.map(job => {

    let found = jslinq(job.items).where(el => {

      let matched = true;
      let values = jslinq(Object.values(el));

      if (query.keyword) {
        matched &= values.where(v => {
          if (typeof v === 'string') {
            return v.toLowerCase().includes(query.keyword);
          }
          return false;
        }).count();
      }

      Object.keys(query.filters).map( filter => {
        if ( typeof el[filter] === 'object' ) {
          matched &= (jslinq(el[filter]).intersect(query.filters[filter]).count() === query.filters[filter].length);
        } else {
          matched &= (el[filter] === query.filters[filter]);
        }
      })

      return matched;

    });

    Object.keys(query.sort).map(s => {
      if (query.sort[s] === 'asc') {
        found = found.orderBy(el => {
          return el[s];
        });
      } else {
        found = found.orderByDescending(el => {
          return el[s];
        });
      }
    });

    if (found.count()) {      
      results.push({
        ...job,        
        total_jobs_in_hospital: found.count(),
        items: found.toList()
      })
    }    
  });

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve)=>setTimeout(resolve, 1000 * Math.random())); 
  
  res.json(results)

  return results;
}
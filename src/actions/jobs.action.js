
export const GET_JOBS = 'GET_JOBS'

export function getJobs (query) {
  return async dispatch => {
    
    const res = await fetch('/api/jobs', {
      method: 'POST',
      body: JSON.stringify(query)
    });
    const result = await res.json();

    dispatch({
      type   : GET_JOBS,
      payload: result
    })

  }
}

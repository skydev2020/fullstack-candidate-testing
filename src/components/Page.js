import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getJobs } from 'actions/jobs.action'

const SORT_FIELDS = {
    'Title': 'job_title',
    'Type': 'job_type',
    'Date': 'created'
}

const JobItem = ({job}) => {
    const [detailOpen, setDetailOpen] = useState(false);
    const [detailItem, setDetailItem] = useState(-1);

    return (
        <li className="job-title">
            <div className="w-full space-x-4 flex" style={{cursor: 'pointer'}} onClick={()=>setDetailOpen(!detailOpen)}>
                <div className="name">{job.name.substr(0, 2)}</div>
                <p className="text-gray-500">{`${job.total_jobs_in_hospital} jobs for ${job.name}`}</p>
            </div>
            { detailOpen && <ul className="w-full mt-3 flex flex-col">
                { job.items.map( (detail, index) => {
                    return (
                        <li className="job-lists"  style={{cursor: 'pointer'}}  onClick={()=> setDetailItem(detailItem == index ? -1 : index)}>
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <h4 className="font-bold">{detail.job_title}</h4>
                                    <p>
                                        {`${detail.job_type} | $${detail.salary_range[0]} ~ $${detail.salary_range[1]}  an hour | ${detail.city}`}
                                    </p>
                                </div>
                                <div><p className="text-gray-600">4 weeks ago</p></div>
                            </div>
                            { (detailItem === index) && 
                                <div className="job-details-wrap flex lg:flex-row flex-col py-4 w-full px-2 md:px-4 rounded shadow mt-2">
                                    <div className="flex flex-col lg:w-2/3 items-start py-1">
                                        <div className="flex flex-row mb-4 w-full items-start flex-wrap">
                                            <h4 className="font-semibold w-full md:w-1/2">Department:</h4>
                                            <p className="w-full md:w-1/2">
                                                {detail.department.map(dep => { return dep+', ' })}
                                            </p>
                                        </div>
                                        <div className="flex flex-row mb-4 w-full items-start flex-wrap">
                                            <h4 className="font-semibold w-full md:w-1/2">Hours/Shifts:</h4>
                                            <p className="w-full md:w-1/2">
                                                {`${detail.hours[0]} hours / ${detail.work_schedule}`}                                                
                                            </p>
                                        </div>
                                        <div className="flex flex-row mb-4 w-full items-start flex-wrap">
                                            <h4 className="font-semibold w-full md:w-1/2">Summary:</h4>
                                            <p className="w-full md:w-1/2">
                                                {detail.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row lg:flex-col lg:items-end items-start lg:w-1/3 lg:space-y-2 space-x-2">
                                        <button className="job-details">Job Details</button>
                                        <button className="create-job">Save Job</button>
                                    </div>
                                </div>
                            }                            
                        </li>
                    )
                })}
            </ul>}            
        </li>
    )
}

const IndexPage = () => {
    
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const { jobs } = state.jobs
    const [ filter, setFilter ] = useState({
        keyword: '',
        filters: {},
        sort: {}
    });
    let totalJobs = 0;
    jobs.map((jobs) => { totalJobs += jobs.total_jobs_in_hospital });
  
    useEffect(() => {
        dispatch(getJobs(filter))
    }, [dispatch]);

    const [ filterOptions, setFilterOptions ] = useState([]);
    useEffect(() => {        
        fetch('/api/filters', { method: 'GET' }).then(async res => {
            setFilterOptions(await res.json());
        });
    }, [setFilterOptions]);

    const handleKeywordChange = (e) => {
        setFilter({
            ...filter,
            keyword: e.target.value
        })
    }

    useEffect(() => {
        dispatch(getJobs(filter))
    }, [filter]);

    const handleFilter = (f, key) => {
        if ( f !== 'department' ) {
            if ( filter.filters[f] === key ) {
                delete filter.filters[f];
            } else {
                filter.filters[f] = key;
            }
        } else {
            if ( !filter.filters['department'] ) {
                filter.filters['department'] = [];
            }
            if ( filter.filters['department'].indexOf(key) === -1) {
                filter.filters['department'].push(key);
            } else {
                let tmp = [];
                for (let value of filter.filters['department']) {
                    if (value === key) continue;
                    tmp.push(value);
                }
                filter.filters['department'] = tmp;
            }
        }
        setFilter({...filter});
    }

    const handleSort = (f) => {
        if (!filter.sort[f]) {
            filter.sort[f] = 'asc';
        } else if (filter.sort[f] === 'asc') {
            filter.sort[f] = 'desc';
        } else {
            delete filter.sort[f];
        }
        console.log(filter);
        setFilter({...filter});
    }

    const judgeActive = (f, i) => {
        if (f !== 'department') {
            return filter.filters[f] === i.key ? 'text-blue-500':'';
        } else if ( !filter.filters[f] ) {
            return '';
        }
        return filter.filters[f].indexOf(i.key) > -1 ? 'text-blue-500':'';
    }

    const [showModal, setShowModal] = useState(-1);

    return (
        <>
            <section>
                <div className="flex flex-col m-5">
                    <input type="search" className="bg-white shadow border-0 search-input" name="search" placeholder="Search for any job, title, keywords or company" value={filter.keyword} onChange={handleKeywordChange}/>
                    <div className="search-icon">
                        <svg version="1.1" className="h-4 text-dark" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 52.966 52.966" style={{enableBackground:"new 0 0 52.966 52.966"}} >
                            <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
                            c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
                            C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
                            S32.459,40,21.983,40z"/>
                        </svg>
                    </div>
                </div>

                <div className="flex sidebarContainer m-5 lg:space-x-4">
                    <div className="w-1/4 hidden filterWrap lg:block space-y-4">
                        { Object.keys(filterOptions).map( (f) => {
                            return (
                                <div className="bg-white  lg:p-6 p-4">
                                    <h3 className="font-bold uppercase mb-2">{f}</h3>
                                    { filterOptions[f].slice(0,10).map( filterItem => 
                                        <div className={`flex mb-2 ${judgeActive(f, filterItem)}`} style={{cursor: 'pointer'}} onClick={() => handleFilter(f, filterItem.key)}>
                                            <h4 className="flex">
                                                {filterItem.key}
                                                <p style={{fontSize: '0.8em', color: '#adadad', margin: '3px 10px'}}>{filterItem.doc_count}</p>
                                            </h4>
                                        </div>
                                    )}
                                    { filterOptions[f].length > 10 &&
                                        <button  className="text-blue-500 show-modal" onClick={()=>setShowModal(f)}>Show more</button>
                                    }
                                    
                                </div>
                            );
                        })}
                    </div>
                    <div className="w-3/4 w-full flex flex-col min-h-screen h-full">
                        <div className="flex flex-col ">
                            <div className="bg-white min-h-screen h-auto flex flex-col w-full">
                                <div className="sortby-wrap">
                                    <div><span className="font-bold">{totalJobs}</span> job postings</div>
                                    <div className="hidden lg:flex lg:space-x-4 pt-2 lg:flex-row flex-col">
                                        <h4 className="font-semibold text-gray-500 flex-col">Sort by</h4>
                                        <div className="flex lg:pt-0 pt-2 space-x-4 item-start">
                                            { Object.keys(SORT_FIELDS).map(field => {
                                                return (
                                                    <p className="capitalize cursor-pointer" onClick={()=>handleSort(SORT_FIELDS[field])}>
                                                        {`${field} ${filter.sort[SORT_FIELDS[field]] ? `(${filter.sort[SORT_FIELDS[field]]})`:''}`}
                                                    </p>
                                                );
                                            }) }
                                        </div>
                                    </div>
                                </div>
                                <ul className="joblisting">
                                    { jobs.map(job => <JobItem job={job} />) }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            { showModal !== -1 && 
            <div className="bg-black-opacity flex modal-wrap">
                <div className="w-3/4">
                    <div className="border-0 shadow-lg modal-inwrap bg-white">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300">
                            <h3 className="text-3xl font-semibold capitalize">{showModal}</h3>
                            <button className="p-1 mt-2 ml-auto close-modal bg-transparent border-0" onClick={()=>setShowModal(-1)}>
                                <svg height="20px" viewBox="0 0 329.26933 329" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                            </button>
                        </div>
                        <div className="flex flex-wrap p-6">
                            { filterOptions[showModal].map( filterItem => 
                                <div className={`flex justify-between w-full lg:w-1/4  p-2 ${judgeActive(showModal, filterItem)}`} style={{cursor: 'pointer'}} onClick={() => handleFilter(showModal, filterItem.key)}>
                                    <h4>{filterItem.key}</h4>
                                    <p className="text-gray-600">{filterItem.doc_count}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>}
            
        </>
    );
}

export default IndexPage;
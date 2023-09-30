import React from 'react';
import JobCart from './JobCart';

const Job = () => {
    const jobDAta = [
        {
            id:1,
            name:"arjun"
        },
        {
            id:2,
            name:"arjun"
        }
    ]
    return (
        <div className='mt-10'>
            <div>
                <ul className='flex   my-3 font-Inter md:text-xl text-xs p-3'>
                    <li>1.5k Jobs found</li>
                    <li className='md:mx-8 mx-2 text-[#999999]'>Requested (4)</li>
                    <li className='md:mx-8 mx-2 text-[#999999]'>Shortlisted (2)</li>
                    <li className='md:mx-8 mx-2 text-[#999999]'>Declined(2) </li>
                    <li className='md:mx-8 mx-2 text-[#999999]'>Hired(4) </li>
                </ul>
                <hr />
            </div>
            <div className='my-3'>
            {
                jobDAta?.map(data=> <JobCart data={data} key={data.id}></JobCart>)
            }
            </div>
        </div>
    );
};

export default Job;
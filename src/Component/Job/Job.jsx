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
                <ul className='flex justify-between my-3 font-Inter text-xl'>
                    <li>1.5k Jobs found</li>
                    <li className=' text-[#999999]'>1.5k Jobs found</li>
                    <li className=' text-[#999999]'>1.5k Jobs found</li>
                    <li className=' text-[#999999]'>1.5k Jobs found</li>
                    <li className=' text-[#999999]'>1.5k Jobs found</li>
                </ul>
                <hr />
            </div>
            {
                jobDAta?.map(data=> <JobCart data={data} key={data.id}></JobCart>)
            }
        </div>
    );
};

export default Job;
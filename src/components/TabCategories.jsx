/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios'

const TabCategories = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const {data} = await axios('http://localhost:5000/jobs')
            setJobs(data)
        }
        getData();
    }, [])

    return (
        <div className='mt-16 mb-16 max-w-[90%] xl:max-w-[1200px] mx-auto'>

            <h1 className='font-bold text-3xl text-center mb-3'>Browse Jobs By Categories</h1>
            <p className='max-w-2xl mx-auto text-center mb-10 text-gray-500'>Three categories available for the time being. They are Web Development, Graphics Design and Digital Marketing. Browse them by clicking on the tabs below.</p>

            <Tabs>
                <TabList>
                <Tab>Web Development</Tab>
                <Tab>Graphics Design</Tab>
                <Tab>Digital Marketing</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            jobs.filter(j => j.category === "Web Development").map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            jobs.filter(j => j.category === "Graphics Design").map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            jobs.filter(j => j.category === "Digital Marketing").map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default TabCategories

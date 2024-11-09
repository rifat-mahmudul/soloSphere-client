import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

const TabCategories = () => {
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
                    <JobCard></JobCard>
                </TabPanel>

                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>

                <TabPanel>
                <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default TabCategories

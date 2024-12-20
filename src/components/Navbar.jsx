import { useContext } from 'react'
import logo from '../assets/images/logo.png'
import { AuthContext } from '../provider/AuthProvider'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => {
            console.log(`The error from logOut : ` , error);
        })
    }

    return (
        <div className='navbar shadow-sm max-w-[90%] xl:max-w-[1200px] mx-auto'>
            <div className='flex-1'>
            <Link to='/' className='flex gap-2 items-center'>
                <img className='w-auto h-7' src={logo} alt='' />
                <span className='font-bold'>SoloSphere</span>
            </Link>
            </div>
            <div className='flex-none'>
            <ul className='menu menu-horizontal px-1'>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='ml-5 mr-5' to='/All-Jobs'>AllJobs</NavLink>
                </li>
    
                {
                    !user && 
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                }
            </ul>
    
            {
                user && 
                    <div className='dropdown dropdown-end z-50'>
                    <div
                    tabIndex={0}
                    role='button'
                    className='btn btn-ghost btn-circle avatar'
                    >
                    <div className='w-10 rounded-full' title=''>
                        <img
                        referrerPolicy='no-referrer'
                        alt='User Profile Photo'
                        src={user?.photoURL}
                        />
                    </div>
                    </div>
                    <ul
                    tabIndex={0}
                    className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                    >
                    <li>
                        <Link to='/add-job' className='justify-between'>Add Job</Link>
                    </li>
                    <li>
                        <Link to='/my-posted-jobs'>My Posted Jobs</Link>
                    </li>
                    <li>
                        <Link to='/my-bids'>My Bids</Link>
                    </li>
                    <li>
                        <Link to='/bid-request'>Bid Requests</Link>
                    </li>
                    <li className='mt-2'>
                        <button onClick={handleLogOut} className='bg-gray-200 block text-center'>Logout</button>
                    </li>
                    </ul>
                    </div>
            }
            </div>
        </div>
    )
}

export default Navbar
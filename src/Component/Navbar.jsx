import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const data = [
    {
        name: 'Movies',
        to: 'movies'
    },
    {
        name: 'Series',
        to: 'series'
    },
    {
        name: 'Animation',
        to: 'animation'
    },
    {
        name: 'Genres',
        to: 'geners'
    },

]
const link = ' flex items-center font-medium text-l relative after:absolute after:-bottom-1 after:left-0 after:bg-link after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out '
const activeLink = ' border-active flex items-center font-medium text-l border-b-2 border-link   after:absolute relative after:bottom-6 h-8 my-6 '

const navbar = 'bg-main-dark-bg  flex pt flex-row content-center  h-72  text-fontactive fixed w-screen top-0 z-10'
const navbarLocation = 'bg-main-dark-bg  flex pt flex-row content-center  h-72  text-fontactive fixed w-screen top-0 z-10 bg-opacity-20'

function Navbar(props) {
    const location= useLocation()
    const pathname = location.pathname.slice(0,7)

    return (
        <div className={pathname ==='/movies' ? navbarLocation : navbar} >
            
                <NavLink to={'/'} className =' flex font-bold text-2xl items-center ml-14 w-3/12 z-50 '> Cinemax </NavLink>

                <div className='flex justify-around  gap-4 max-w-[347px] content-center ml-32 w-3/12' >
                    {data.map((item,index) => {
                        return (
                            <div key={index}
                            className= 'flex items-center'
                                >
                                <NavLink
                                    className= {({isActive}) => isActive ? activeLink : link }
                                    to={`/${item.to}`}>
                                    {item.name}
                                </NavLink>
                            </div>
                        )
                    })}
                </div>
                <div className=' flex items-center pt-2 ml-16  w-2/12 '>
                    <input type="text" placeholder='Search' className='  pl-3 pb-1 placeholder:text-fontnormal  focus:outline-none text-opacity-60 bg-main-dark-bg h-7 rounded-full w-30  border border-fontnormal' />
                    <span>
                    <svg className='ml-3' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path   d="M9.739 0C15.109 0 19.477 4.368 19.477 9.738C19.477 12.2715 18.5047 14.5823 16.9136 16.3165L20.0444 19.4407C20.3374 19.7337 20.3384 20.2077 20.0454 20.5007C19.8994 20.6487 19.7064 20.7217 19.5144 20.7217C19.3234 20.7217 19.1314 20.6487 18.9844 20.5027L15.8159 17.343C14.1491 18.6778 12.0357 19.477 9.739 19.477C4.369 19.477 0 15.108 0 9.738C0 4.368 4.369 0 9.739 0ZM9.739 1.5C5.196 1.5 1.5 5.195 1.5 9.738C1.5 14.281 5.196 17.977 9.739 17.977C14.281 17.977 17.977 14.281 17.977 9.738C17.977 5.195 14.281 1.5 9.739 1.5Z" fill="#F9F9F9"/></svg>
                    </span>
                </div>

                <div className='flex items-center w-2/12 ' >
                    <button  className='bg-link rounded-full text-xl  pt-2 pb-2  pl-5 pr-5 ml-16 font-semibold' >Subscribe</button>
                </div>

                <div className='flex items-center ml-12  w-2/12'>
                    <span className='mr-16 relative '>
                    <div
                        className="flex bg-fontnormal h-2 w-4 absolute top-0 right-0 bottom-auto left-auto z-10 translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full  p-2.5 text-xs">
                        <span className='absolute  top-2/4 right-2/4 bottom-auto left-auto z-20 inline-block translate-x-1/2 -translate-y-1/2 ' >10</span>
                    </div>
                    

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0199 20.53C9.68987 20.53 7.35987 20.16 5.14987 19.42C4.30987 19.13 3.66987 18.54 3.38987 17.77C3.09987 17 3.19987 16.15 3.65987 15.39L4.80987 13.48C5.04987 13.08 5.26987 12.28 5.26987 11.81V8.92004C5.26987 5.20004 8.29987 2.17004 12.0199 2.17004C15.7399 2.17004 18.7699 5.20004 18.7699 8.92004V11.81C18.7699 12.27 18.9899 13.08 19.2299 13.49L20.3699 15.39C20.7999 16.11 20.8799 16.98 20.5899 17.77C20.2999 18.56 19.6699 19.16 18.8799 19.42C16.6799 20.16 14.3499 20.53 12.0199 20.53ZM12.0199 3.67004C9.12987 3.67004 6.76987 6.02004 6.76987 8.92004V11.81C6.76987 12.54 6.46987 13.62 6.09987 14.25L4.94987 16.16C4.72987 16.53 4.66987 16.92 4.79987 17.25C4.91987 17.59 5.21987 17.85 5.62987 17.99C9.80987 19.39 14.2399 19.39 18.4199 17.99C18.7799 17.87 19.0599 17.6 19.1899 17.24C19.3199 16.88 19.2899 16.49 19.0899 16.16L17.9399 14.25C17.5599 13.6 17.2699 12.53 17.2699 11.8V8.92004C17.2699 6.02004 14.9199 3.67004 12.0199 3.67004Z" fill="#F9F9F9"/>
                                <path d="M13.8801 3.94005C13.8101 3.94005 13.7401 3.93005 13.6701 3.91005C13.3801 3.83005 13.1001 3.77005 12.8301 3.73005C11.9801 3.62005 11.1601 3.68005 10.3901 3.91005C10.1101 4.00005 9.81011 3.91005 9.62011 3.70005C9.43011 3.49005 9.37011 3.19005 9.48011 2.92005C9.89011 1.87005 10.8901 1.18005 12.0301 1.18005C13.1701 1.18005 14.1701 1.86005 14.5801 2.92005C14.6801 3.19005 14.6301 3.49005 14.4401 3.70005C14.2901 3.86005 14.0801 3.94005 13.8801 3.94005Z" fill="#F9F9F9"/>
                                <path d="M12.02 22.8101C11.03 22.8101 10.07 22.4101 9.37002 21.7101C8.67002 21.0101 8.27002 20.0501 8.27002 19.0601H9.77002C9.77002 19.6501 10.01 20.2301 10.43 20.6501C10.85 21.0701 11.43 21.3101 12.02 21.3101C13.26 21.3101 14.27 20.3001 14.27 19.0601H15.77C15.77 21.1301 14.09 22.8101 12.02 22.8101Z" fill="#F9F9F9"/>
                        </svg>
                    </span>

                    <img
                    src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                    className="w-10  rounded-full"
                    alt="Avatar" />
                    <span>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.724562 0.641432C0.946451 0.419543 1.29367 0.399372 1.53835 0.580917L1.60845 0.641432L6.99984 6.03254L12.3912 0.641432C12.6131 0.419543 12.9603 0.399372 13.205 0.580917L13.2751 0.641432C13.497 0.863321 13.5172 1.21054 13.3356 1.45522L13.2751 1.52532L7.44178 7.35865C7.21989 7.58054 6.87267 7.60071 6.628 7.41916L6.5579 7.35865L0.724562 1.52532C0.480484 1.28124 0.480484 0.88551 0.724562 0.641432Z" fill="#F9F9F9"/>
                            </svg>
                    </span>
                </div>
           
        </div>
    );
}

export default Navbar


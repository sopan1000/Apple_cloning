import {appleImg, bagImg, searchImg} from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header classname="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
        <nav classname="flex w-full screen-max-width">
            <img src={appleImg} alt="Apple" width={14} height={18} />
        </nav>
        <div classname="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((nav)=>(
                <div key={nav}>
                    {nav}
                </div>
            ))}
        </div>
        <div>
            <img src={searchImg} alt="search" width={18} height={18} />
            <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      
    </header>
  )
}

export default Navbar

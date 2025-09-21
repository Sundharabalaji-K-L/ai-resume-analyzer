import {Link} from "react-router";
import {usePuterStore} from "~/lib/puter";

const Navbar = () => {
    const {auth} = usePuterStore();

    return (
        <nav className="navbar flex items-center justify-space-around">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
           <div className="flex items-center justify-space-between gap-6">
               <Link to="/upload" className="primary-button w-fit">
                   Upload Resume
               </Link>

               <button className="primary-button w-fit" onClick={auth.signOut}>
                   <p>Log Out</p>
               </button>
           </div>

        </nav>
    )
}
export default Navbar

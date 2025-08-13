import Navbar from "./Navbar";
import Searchbar from "./Searchbar";


const Header = () => {
    return (
        <div className=" w-full">
            <Navbar></Navbar>
            <Searchbar></Searchbar>
        </div>
    );
};

export default Header; 
import { NavLink } from "react-router-dom";

const navList = ({title, style, pathName}) => {
    return (
        <li className={`text-sm hover:font-bold text-lightGray hover:text-black ${style}`}><NavLink to={`${pathName}`}>{title}</NavLink></li>
    );
};

export default navList;
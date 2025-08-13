import { Link, useLocation } from "react-router-dom";


const BreadCrumbs = () => {
    const location = useLocation()
    const pathnames = location.pathname.split("/").filter(x => x)
    return (
        
        <nav aria-label="breadcrum">
            <ol className="flex gap-2">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                {
                    pathnames.map((items, index)=>{
                        const routeTo = '/'+pathnames.slice(0, index+1).join('/');
                        const isLast = index === pathnames.length -1;

                        return(
                            <li key={index} className="flex items-center">
                                <span>{">"}</span>
                                {isLast? (<span className="flex gap-2 mx-2">{decodeURIComponent(items)}</span>): (
                                    <Link className="flex gap-2 mx-2" to={routeTo}>{decodeURIComponent(items)}</Link>
                                )}

                            </li>
                        )
                    }) 
                }
            </ol>
        </nav>
    );
};

export default BreadCrumbs;
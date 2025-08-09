import Footer from '../shared/footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../shared/header/Header';

const Main = () => {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default Main;
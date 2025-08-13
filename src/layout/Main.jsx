import Footer from '../shared/footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../shared/header/Header';
import BreadCrumbs from '../components/BreadCrumbs';
import Container from '../components/Container';

const Main = () => {
    return (
        <>
        <Header></Header>
        <Container><BreadCrumbs/></Container>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default Main;
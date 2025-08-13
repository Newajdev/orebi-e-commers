import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Container from "../components/Container";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/shop",
            element: <Container><h2 className="text-center text-2xl py-6 font-bold uppercase">Shop Page</h2></Container>
        },
        {
            path:"/shop/productsdetails",
            element: <Container><h2 className="text-center text-2xl py-6 font-bold uppercase">Products Details</h2></Container>
        },
        {
            path:"/about",
            element: <Container><h2 className="text-center text-2xl py-6 font-bold uppercase">about Page</h2></Container>
        },
        {
            path:"/contact",
            element: <Container><h2 className="text-center text-2xl py-6 font-bold uppercase">contact Page</h2></Container>
        },
        {
            path:"/journal",
            element: <Container><h2 className="text-center text-2xl py-6 font-bold uppercase">journal Page</h2></Container>
        },
    ]
  },
]);

export default Router;
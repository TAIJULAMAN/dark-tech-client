import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;
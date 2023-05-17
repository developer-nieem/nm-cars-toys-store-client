import { Outlet } from "react-router-dom";
import Header from "../page/Shared/Header";
import Footer from "../page/Shared/Footer";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
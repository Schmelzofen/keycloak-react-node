import Auth from "../auth/Auth";
import Header from "../header/Header";

const Main = () => {
    return (
        <div className="mainComponent">
            <Header/>
            <Auth/>
        </div>
    );
}

export default Main;
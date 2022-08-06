import { useState } from "react";

import "./auth.scss"

import Login from "./action/Login";
import Register from "./action/Register";

const Auth = () => {
    const [visible, setIsVisible] = useState(false);

    const clickHandler = () => {
        setIsVisible(!visible);
    }

    return (
        <div className="authContainer">
            {visible ? <Login onClick={clickHandler} /> : <Register onClick={clickHandler} />}
        </div>
    );
}

export default Auth;
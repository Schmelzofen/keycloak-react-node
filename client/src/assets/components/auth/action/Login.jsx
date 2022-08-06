import "./style.scss";

const Login = ({ onClick }) => {
    return (
        <div className="loginContainer">
            <form>
                <div className="emailFormContainer">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className="passwordFormContainer">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <div className="submitButtonContainer">
                    <button type="submit">Login</button>
                </div>
                <div className="notRegistered">
                    <span onClick={onClick}>Don't have an account?</span>
                </div>
            </form>
        </div>
    );
}

export default Login;
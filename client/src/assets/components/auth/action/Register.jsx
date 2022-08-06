import "./style.scss";

const Register = ({ onClick }) => {
    return (
        <div className="registerContainer">
            <form>
                <div className="emailFormContainer">
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className="emailRepeat">
                        <label htmlFor="email">Repeat Email</label>
                        <input type="email" name="cEmail" />
                    </div>
                </div>
                <div className="passwordFormContainer">
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <div className="passwordRepeat">
                        <label htmlFor="password">Repeat Password</label>
                        <input type="password" name="cPassword" />
                    </div>
                </div>
                <div className="submitButtonContainer">
                    <button type="submit">Register</button>
                </div>
                <div className="alreadyRegistered">
                    <span onClick={onClick}>Already have an account?</span>
                </div>
            </form>
        </div>
    );
}

export default Register;
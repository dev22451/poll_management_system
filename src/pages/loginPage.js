//import './loginpage.css';
import { NavLink } from 'react-router-dom';
const Login = () => {


    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-sm-4 mt-5 bg-light py-4">
                        <h1 className='text-center'>Login</h1>
                        <form>
                            <span >
                                Login
                                <div className="input-group">
                                    <input type='text' className="form-control " />
                                </div>
                            </span>
                            <span >
                                Password
                                <div>
                                    <input type='password' className="form-control" />
                                </div>
                            </span>
                            <NavLink to="/dashboard"><button type="submit" className="btn btn-primary mt-3 text-center">Login</button></NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;
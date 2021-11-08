import { NavLink } from 'react-router-dom';
//import { useState } from 'react';
import { useSelector } from 'react-redux';
import './loginpage.css';
const Login = () => {
    //const [admin, setAdmin] = useState({ id: '', password: '' })
    const adminData = useSelector((state) => state.admin);
    console.log(adminData);

    // const handleAdminId = (e) => {
    //     setAdmin({ id: e.target.value })
    // }
    // const handleAdminPass = (e) => {
    //     setAdmin({ password: e.target.value })
    // }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <span className="navbar-brand text-primary fw-bold" >Poll Management System</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            </li>
                        </ul>
                        <form className="d-flex">
                            <NavLink to="/user"><button type="submit" className="btn0">Guest</button></NavLink>
                        </form>
                    </div>
                </div>
            </nav>
            <section className="login">
                <div className="container">
                    <div className="row justify-content-center pt-5 ">
                        <div className="col-sm-4 mt-5 bg-light pt-5 pb-3 shadow rounded">
                            <h1 className='text-center mb-4'>Login</h1>
                            <form>

                                <div className="px-2 input-group">
                                    <div type="submit" className="btn btn-primary" >
                                        <i className="fad fa-user">
                                        </i>
                                    </div>
                                    <input type='text' className="form-control input-field" placeholder='Enter Id' />
                                </div>
                                <div className="px-2 pt-3 input-group">
                                    <div type="submit" className="btn btn-primary" >
                                        <i className="fad fa-key">
                                        </i>
                                    </div>

                                    <input type='password' className="form-control" placeholder='Enter Password' />

                                </div>

                                <div className=" float-end">
                                    <NavLink to="/dashboard"><button type="submit" className="btn btn-primary mt-3 me-2 m-auto"><i className="fad fa-sign-in pe-1"></i>LOGIN</button></NavLink>

                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}
export default Login;
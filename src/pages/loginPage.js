import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
const Login = () => {
    const [admin, setAdmin] = useState({ id: '', password: '' })
    const adminData = useSelector((state) => state.admin);
    console.log(adminData);

    const handleAdminId = (e) => {
        setAdmin({ id: e.target.value })
    }
    const handleAdminPass = (e) => {
        setAdmin({ password: e.target.value })
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-sm-4 mt-5 bg-light py-4">
                        <h1 className='text-center'>Login</h1>
                        <form onSubmit=''>
                            <div className="form-floating">
                                <input type='text' className="form-control " id='id' name='id' placeholder="enter id" onChange={handleAdminId} value={admin.id} />
                                <label from='id'>Id</label>
                            </div>
                            <div className='form-floating'>
                                <input type='password' className="form-control" id='password' placeholder='enter password' onChange={handleAdminPass} value={admin.password} />
                                <label from='password'>Password</label>
                            </div>

                            <NavLink to="/dashboard"><button type="submit" className="btn btn-primary mt-3 text-center">Login</button></NavLink>
                            <NavLink to="/user"><button type="submit" className="btn btn-primary mt-3 text-center float-end">Guest</button></NavLink>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Login;
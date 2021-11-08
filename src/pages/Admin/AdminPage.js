import React from 'react';
import { Route, Switch } from 'react-router';
import './AdminPage.css';
import { NavLink } from 'react-router-dom';
import AddUser from './addUser';
import AddPoll from './addPoll';

const AdminPage = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand text-primary fw-bold" href="#">DASHBOARD</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/dashboard"><button type="submit" className="btn btn-outline-secondary rounded-pill ms-5 mx-2 fw-bold">AddUser</button></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/dashboard/addpoll"><button type="submit" className="btn btn-outline-secondary rounded-pill mx-2 fw-bold">CreatePoll</button></NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <NavLink to="/"> <button className="btn0 " type="submit">Logout</button></NavLink>
                        </form>
                    </div>
                </div>
            </nav>



            <section className='Content py-5'>
                <Switch>
                    <Route exact path='/dashboard' component={AddUser} />
                    <Route exact path='/dashboard/addpoll' component={AddPoll} />

                </Switch >

            </section >
        </>
    )

}
export default AdminPage;
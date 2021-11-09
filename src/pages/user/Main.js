import UserPage from "./userPage";
import { NavLink } from "react-router-dom";

const Main = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <span className="navbar-brand text-primary fw-bold" href="#">Poll Management System</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <form className="d-flex">
                            <NavLink to="/"> <button className="btn0 " type="submit">Logout</button></NavLink>
                        </form>
                    </div>
                </div>
            </nav>
            <section className="main">
                <div className="container">
                    <div className="row">
                        <UserPage />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Main;
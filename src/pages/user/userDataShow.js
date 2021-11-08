

const UserDataShow = () => {
    return (
        <>
            <div className="card pt-2 bg-light shadow rounded pt-5 mt-5 me-5">
                <i className="fad fa-user fa-6x"></i>
                <div className="card-body">
                    <h5 className="card-title">User Details</h5>
                    <p className="card-text"> ID: 34645264</p>
                </div>
                <ul className="list-group list-group-flush ">
                    <li className="list-group-item bg-light">Name: Guest</li>
                    {/* <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li> */}
                </ul>
            </div>

        </>
    )


}
export default UserDataShow;
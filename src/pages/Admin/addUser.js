
const AddUser = () => {

    return (
        <>
            <div className="container py-5">
                <div className="row pt-3 justify-content-center">
                    <div className="col-4 bg-light py-3 shadow rounded">
                        <h1 className="text-center text-primary py-2">Add New User</h1>
                        <form>
                            <div className='input-group pt-2 px-2'>
                                <div className="btn btn-primary" >
                                    <i className="fad fa-user">
                                    </i>
                                </div>
                                <input type='text' className='form-control input-field' placeholder='Enter Name' />
                            </div>
                            <div className='input-group pt-2 px-2'>
                                <div className="btn btn-primary" >
                                    <i className="fad fa-envelope-open-text">
                                    </i>
                                </div>
                                <input type='email' className='form-control input-field' placeholder='Enter email' />
                            </div>
                            <div className='input-group pt-2 px-2'>
                                <div className="btn btn-primary" >
                                    <i className="fad fa-key"></i>
                                </div>
                                <input type='password' className='form-control input-field' placeholder='Enter password' />
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button type="submit" className="btn btn-primary mt-3 me-2 "><i className="fad fa-user-plus pe-1"></i>Add</button>
                            </div>
                        </form>
                    </div>

                </div >
            </div >

        </>
    )

}
export default AddUser;
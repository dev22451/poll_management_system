
const AddPoll = () => {

    return (
        <>
            <div className="container py-5">
                <div className="row pt-3 justify-content-center">
                    <div className="col-4 bg-light py-3 shadow rounded">
                        <h1 className="text-center text-primary py-2">Create Poll</h1>
                        <form>
                            <div className='input-group pt-2 px-2'>

                                <input type='text' className='form-control input-field' placeholder='Enter Poll Title' />
                            </div>
                            <h1 className="text-center text-primary py-2">Poll Options</h1>
                            <div className='input-group pt-2 px-2'>

                                <input type='text' className='form-control input-field' placeholder='Enter polls' />
                            </div>
                        </form>
                    </div>

                </div >
            </div >

        </>
    )

}
export default AddPoll;
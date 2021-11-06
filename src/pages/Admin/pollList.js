import React from 'react';
const PollList = (props) => {
    const polls = props.polls
    console.log(polls);
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-sm-4 bg-Light form-control my-1">
                    <span className="text-dark pt-2">{polls}</span>
                    <button
                        className="btn btn-sm mx-2 float-sm-end  " id="btnDelete" >
                        <i
                            className="fas fa-trash-alt fa-lg  text-danger"
                            id="btnDelete"
                            title="Delete"

                        />
                    </button>
                    <button className=" btn btn-sm  mb-3 float-sm-end" id="btnEdit">
                        <i
                            className="fas fa-pencil fa-lg  text-warning "
                            id="btnEdit"
                            title="Edit"
                        />
                    </button>

                </div>
            </div>
        </>

    )
}
export default PollList;
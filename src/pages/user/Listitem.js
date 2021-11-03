import React from 'react';
const List = ({ poll, vote }) => {
    console.log(poll);
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-8">

                    <div className="d-flex form-control">
                        <span>{poll}</span><span>{vote}</span>
                        <button type="button" className="btn btn-success mx-5">Vote</button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default List;
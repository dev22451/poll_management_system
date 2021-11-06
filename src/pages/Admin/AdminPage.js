import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPoll } from './pollSlice';
import PollList from './pollList';
const AdminPage = () => {
    const poll = useSelector((state) => state.polls);
    const dispatch = useDispatch();
    const [input, setInput] = useState();
    const handleInput = (e) => {
        setInput(e.target.value)
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(addPoll({
            name: input,
        }))

    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 bg-dark">
                        <h1 className="text-light text-center">Admin</h1>
                    </div>
                    <div className="col-10 bg-light">
                        <div className="row justify-content-center">
                            <div className="col-sm-4 bg-secondary mt-5 ">
                                <form onSubmit={handleOnSubmit}>
                                    <h1 className="text-center text-light pt-3">Poll List </h1><br />
                                    <div className="input-group mb-3 px-4">
                                        <input
                                            type="text"
                                            name="todo"
                                            id="todo"
                                            onChange={handleInput}
                                            className="form-control "
                                        />
                                        <button type="submit" className="btn btn-primary" >
                                            <i className="fas fa-plus-square fa-2x" title="Add Items">
                                            </i>
                                        </button>
                                    </div>
                                </form>
                                {
                                    poll.map((item) => {
                                        return (
                                            <>
                                                <PollList
                                                    polls={item.name}
                                                />
                                            </>
                                        )
                                    })
                                }
                            </div >
                        </div >
                    </div>

                </div>

            </div>
        </>
    )

}
export default AdminPage;
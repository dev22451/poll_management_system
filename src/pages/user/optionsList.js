import { addVote } from '../../redux/pollSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './optionsList.css';
const OptionsList = ({ id, vote, polls }) => {
    const dispatch = useDispatch();
    const [voteVal, setVote] = useState(vote)
    const handleVote = (e) => {
        e.preventDefault();
        const voteData = voteVal + 1
        setVote(voteData)
        console.log(voteVal)
        dispatch(addVote({
            id: id,
            vote: voteVal,
        }))

    }
    return (
        <>
            <div className="form-control mt-2   d-inline-flex">
                <span className='fw-bold'>{polls}</span>
                <span className='badge rounded-pill bg-secondary  vote'>{vote}</span>
                <button type="button" onClick={handleVote} className="btn btn-success float-end " >Vote</button>

            </div>

        </>
    )

}
export default OptionsList;
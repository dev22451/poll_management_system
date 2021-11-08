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
            <div className=''>
                <div className="form-control py-3">
                    <span className='fw-bold'>{polls}</span>

                    <button type="button" onClick={handleVote} className="btn btn-sm btn-success float-end ms-5" >Vote</button>
                    <span className='badge rounded-pill bg-secondary float-end  me-5 vote'>{vote}</span>
                </div>
            </div>


        </>
    )

}
export default OptionsList;
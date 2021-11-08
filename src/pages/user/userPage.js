import { useSelector } from 'react-redux';
import List from './Listitem';
// import { NavLink } from 'react-router-dom';
import './userPage.css';
import UserDataShow from './userDataShow';

const UserPage = () => {
    const poll = useSelector((state) => state.polls.pollList);
    console.log(poll)
    return (
        <>
            <div className="row">
                <div className="col-4 text-center mt-5">
                    <UserDataShow />

                </div>
                <div className="col-8 mt-2">
                    <div className='row'>
                        {
                            poll.map((item) => {
                                console.log();

                                return (
                                    <>

                                        <List
                                            title={item.title}
                                            data={item.options}
                                            total={item.total}

                                        />
                                    </>
                                )
                            })
                        }

                    </div>

                </div>

            </div>
        </>
    )
}
export default UserPage;

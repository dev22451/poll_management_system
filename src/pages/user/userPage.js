import { useSelector } from 'react-redux';
import List from './Listitem';
import './userPage.css';
import UserDataShow from './userDataShow';

const UserPage = () => {
    const poll = useSelector((state) => state.polls.pollList);
    console.log(poll)
    return (
        <>
            <div className='container'>
                <div className="row bg-light">
                    <div className="col-sm-12">
                        <UserDataShow />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-12 mt-3">
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

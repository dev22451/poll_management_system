import { useSelector } from 'react-redux';
import List from './Listitem';
const UserPage = () => {
    const poll = useSelector((state) => state.polls);
    return (
        <>

            <div className="row">
                <div className="col-4 text-center mt-5">
                    <i className="fad fa-user-tie fa-6x"></i><br />
                    <span>Name: Rajneesh</span><br />
                    <span>Status: Voted</span>

                </div>
                <div className="col-8 mt-5">
                    {
                        poll.map((item) => {
                            console.log();

                            return (
                                <>

                                    <List
                                        title={item.title}
                                        data={item.options}

                                    />
                                </>
                            )
                        })
                    }

                </div>



            </div>
        </>
    )
}
export default UserPage;

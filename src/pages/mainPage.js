import DashBoard from './Admin/AdminPage';
import { Route, Switch } from 'react-router';
import Login from './loginPage';
const MainPage = () => {
    return (
        <>
            <Login />
            <Switch>
                <Route path='/dashboard' component={DashBoard} />
            </Switch >
        </>

    )
}
export default MainPage;
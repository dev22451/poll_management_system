import DashBoard from './Admin/AdminPage';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './loginPage';
import Main from './user/Main';
const MainPage = () => {
    return (
        <>

            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/dashboard' component={DashBoard} />
                    <Route path='/user' component={Main} />
                </Switch >
            </BrowserRouter>
        </>

    )
}
export default MainPage;
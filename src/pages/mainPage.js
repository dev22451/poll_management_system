import AdminPage from './Admin/AdminPage';
import { Route, Switch } from 'react-router';
//import { BrowserRouter } from 'react-router-dom';
import Login from './loginPage';
import Main from './user/Main';
const MainPage = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/dashboard' component={AdminPage} />
                <Route path='/user' component={Main} />
            </Switch >

        </>

    )
}
export default MainPage;
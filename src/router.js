import React,{ Component } from 'react';
import { HashRouter,Route,Switch } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import {
    Login,
    Home,
    Button,
    NoMatch
} from './pages';

export default class Irouter extends Component{
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path='/admin' render={()=>(
                            <Admin>
                                <Switch>
                                    <Route path='/admin/home' component={ Home } />
                                    <Route path='/admin/ui/buttons' component={ Button } />
                                    <Route component={ NoMatch }></Route>
                                </Switch>
                            </Admin>
                        )}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/order/detail' component={Login}></Route>
                    </Switch>       
                </App>
            </HashRouter>
        )
    }
}
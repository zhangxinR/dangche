import React,{ Component } from 'react';
import { HashRouter,Route,Switch,Redirect } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import {
    Login,
    Home,
    Buttons,
    NoMatch,
    Modals,
    Loadings,
    Notices,
    Messages,
    Tabs,
    Gallery,
    Carousel,
    Logins,
    Regs,
    BasicTable
} from './pages';

export default class Irouter extends Component{
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path='/' exact render={
                            ()=>(
                                <Redirect to='/admin/home'/>
                            )
                        }/>
                        <Route path='/admin' render={()=>(
                            <Admin>
                                <Switch>
                                    <Route path='/admin/home' component={ Home } />
                                    <Route path='/admin/ui/buttons' component={ Buttons } />
                                    <Route path='/admin/ui/modals' component={ Modals } />
                                    <Route path='/admin/ui/loadings' component={ Loadings } />
                                    <Route path='/admin/ui/notification' component={ Notices } />
                                    <Route path='/admin/ui/messages' component={ Messages } />
                                    <Route path='/admin/ui/tabs' component={ Tabs } />
                                    <Route path='/admin/ui/gallery' component={ Gallery } />
                                    <Route path='/admin/ui/carousel' component={ Carousel } />
                                    <Route path='/admin/form/login' component={ Logins } />
                                    <Route path='/admin/form/reg' component={ Regs } />
                                    <Route path='/admin/table/basic' component={ BasicTable } />
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
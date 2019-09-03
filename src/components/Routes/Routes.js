import React from 'react';
import { Route,Switch} from 'react-router-dom';
import ProfileP from '../ProfileP'
import SearchS from '../SearchS';

const Routes =()=>{
    return(
        <Switch>
            <Route exact path="/" component={SearchS}/>
            <Route  path="/profile/:platform/:gamerTag" component={ProfileP}/>
        </Switch>
    )
}

export default Routes;
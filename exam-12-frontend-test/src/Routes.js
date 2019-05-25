import React from 'react';
import { Route, Switch} from "react-router-dom";

import Register from "./containers/Register/Regiser";
import Login from "./containers/Login/Login";
import Images from "./containers/Images/Images";
import Image from "./containers/Image/Image";


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Images} />
            <Route path="/images/:id" component={Image} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
        </Switch>
    );
};

export default Routes;
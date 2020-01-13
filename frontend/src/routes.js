import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';

function Routes() {
    return(
        <Switch> {/* permite que o apenas uma rota seja chamada a cada URL que o usuario chamar */}
        <Route path="/" exact component={Feed} />
        <Route path="/" component={New} />
        </Switch>
    );
}

export default Routes;
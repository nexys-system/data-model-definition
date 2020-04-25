import React from 'react';
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

import Layout from './layout';

import Main from './app';
import ValidateSchema from './validation/schema';
import OpenAPi from './open-api';
import toTS from './to-ts';

const NotFound = () => <p>Page Not Found</p>;

function Router() {
  return (<Layout>
    <Switch>
      <Route exact path={'/'} component={Main} />
      <Route exact path={'/validate/schema'} component={ValidateSchema}/>
      <Route exact path={'/openApi'} component={OpenAPi}/>
      <Route exact path={'/toTS'} component={toTS}/>
      <Route path="/" component={NotFound} />
    </Switch>
  </Layout>);
}

export default withRouter(Router);

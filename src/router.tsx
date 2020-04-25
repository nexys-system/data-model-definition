import React from 'react';
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

import Layout from './layout';

import Main from './app432';
import ValidateSchema from './validation/schema';
import OpenAPi from './open-api';

const NotFound = () => <p>Page Not Found</p>;

function Router(props:any) {
  return (<Layout>
    <Switch>
      <Route exact path={'/'} component={Main} />
      <Route exact path={'/validate/schema'} component={ValidateSchema}/>
      <Route exact path={'/openApi'} component={OpenAPi}/>
      <Route path="/" component={NotFound} />
    </Switch>
  </Layout>);
}

export default withRouter(Router);

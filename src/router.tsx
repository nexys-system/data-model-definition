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
import toTS from './model-to-ts';
import queryToTS from './query-to-ts';
import toJoi from './model-to-ts/joi'
import FakeData from './fake-data';
import SQLTransform from './sql-transform';

const NotFound = () => <p>Page Not Found</p>;

function Router() {
  return (<Layout>
    <Switch>
      <Route exact path={'/'} component={Main} />
      <Route exact path={'/validate/schema'} component={ValidateSchema}/>
      <Route exact path={'/openApi'} component={OpenAPi}/>
      <Route exact path={'/toTS'} component={toTS}/>
      <Route exact path={'/queryToTs'} component={queryToTS}/>
      <Route exact path={'/toJoi'} component={toJoi}/>
      <Route exact path={'/fake-data'} component={FakeData}/>
      <Route exact path={'/sql-transform'} component={SQLTransform}/>
      <Route path="/" component={NotFound} />
    </Switch>
  </Layout>);
}

export default withRouter(Router);

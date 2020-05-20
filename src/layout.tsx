import React from 'react';

import { Link } from 'react-router-dom';
import { ghUrl } from './utils';
import Icon from './components/icon';

const style = {
  borderTop: '1px solid #e5e5e5',
  borderBottom: '1px solid #e5e5e5',
  boxShadow: '0 .25rem .75rem rgba(0, 0, 0, .05)'
}

const title = 'Nexys DDL';

const menus = [ 
 {link: '/validate/schema', name: 'Validate Schema'},
 {link: '/openApi', name: 'Open Api Conversion'},
 {link: '/toTS', name: 'Model to TypeScript'},
 {link: '/queryToTS', name: 'Query to TypeScript'},
 {link: '/fake-data', name: 'Fake Data'}
];

export default (props:any) => {
  const header = (<header>
    <div style={style} className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white">
      <h5 className="my-0 mr-md-auto font-weight-normal"><Link to={'/'}>{title}</Link> <small><a href={ghUrl}><Icon name="code"/></a></small></h5>
      <nav className="my-2 my-md-0 mr-md-3">
        {menus.map((menu,i) => <Link className="p-2 text-dark" key={i} to={menu.link}>{menu.name}</Link>)}
      </nav>
    </div>
  </header>);

  return (<>{header}<div className="container">{props.children}</div></>);
}
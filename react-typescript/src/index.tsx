import * as React from 'react';
import * as ReactDOM from 'react-dom';
// tslint:disable-next-line:ordered-imports
// import React from 'react'; 
// tslint:disable-next-line:ordered-imports
import 'bootstrap/dist/css/bootstrap.css';
import './css/edits.css'; 
// import './index.css'; 
// tslint:disable-next-line:ordered-imports
// import Example from './components/Example';
// tslint:disable-next-line:ordered-imports
// import Validation from './components/Validation';
// tslint:disable-next-line:ordered-imports
import SampleForm from './components/SampleForm';
// tslint:disable-next-line:ordered-imports
// import NameForm from './components/NameForm';

ReactDOM.render(  
   // <Example/>,
   // <Validation/>,
   // <NameForm/>,
   <SampleForm />,
  document.getElementById('root') as HTMLElement
);


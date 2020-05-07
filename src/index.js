import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CourseComponent from './view/ManageCoursesComponent';


ReactDOM.render(<CourseComponent />, document.getElementById('root'));
registerServiceWorker();
import React from 'react';
import {Link } from 'react-router-dom';


const MainPage = () => (
  <div classemail="log-wrapper flex">
   <div><Link to={`/countries`} >Countries</Link></div>
   <div><Link to={`/callCenters`} >CallCenters</Link></div>
  </div>
);

export default MainPage
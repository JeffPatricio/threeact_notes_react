import React, { useState, useEffect, useContext, Fragment } from 'react';
import GlobalStyles from './styles/global';
import PublicRoutes from './routes/PublicRoutes';

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <PublicRoutes />
    </Fragment>
  )
}

export default App

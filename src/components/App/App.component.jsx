import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import VideoDetails from '../../pages/VideoDetails/VideoDetails.component';
import Layout from '../Layout';

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/videoDetails/:videoId">
        <VideoDetails />
      </Route>
    </Switch>
  );

  return (
    <BrowserRouter>
      <Layout>
        <main>{routes}</main>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

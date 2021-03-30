import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import VideoDetails from '../../pages/VideoDetails/VideoDetails.component';
import Layout from '../Layout';

const App = () => {
  const [queryFromSeacrhInput, setQueryFromSearchInput] = useState('Goku vs Jiren');

  const routes = (
    <Switch>
      <Route path="/" exact>
        <HomePage queryFromSeacrhInput={queryFromSeacrhInput} />
      </Route>
      <Route path="/videoDetails/:videoId">
        <VideoDetails />
      </Route>
    </Switch>
  );

  return (
    <BrowserRouter>
      <Layout setQueryFromSearchInput={setQueryFromSearchInput}>
        <main>{routes}</main>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

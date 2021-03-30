import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import VideoDetails from '../../pages/VideoDetails/VideoDetails.component';
import Layout from '../Layout';
import { Context } from '../../utils/context/context';

const App = () => {
  const [queryFromSeacrhInput, setQueryFromSearchInput] = useState('Goku vs Jiren');

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
    <Context.Provider
      value={{
        queryToSearch: queryFromSeacrhInput,
        setQueryFromSearchInput,
      }}
    >
      <BrowserRouter>
        <Layout>
          <main>{routes}</main>
        </Layout>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;

import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../GlobalStyles.js/GlobalStyles';
import { lightTheme, darkTheme } from '../../utils/themes';
import HomePage from '../../pages/Home';
import VideoDetails from '../../pages/VideoDetails/VideoDetails.component';
import Layout from '../Layout';
import { Context } from '../../utils/store/Store';

const App = () => {
  const state = useContext(Context)[0];

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
      <ThemeProvider theme={state.isDarkTheme ? darkTheme : lightTheme}>
        <>
          <GlobalStyles />
          <Layout>
            <main>{routes}</main>
          </Layout>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

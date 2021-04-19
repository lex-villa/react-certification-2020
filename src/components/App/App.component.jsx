import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../GlobalStyles.js/GlobalStyles';
import { lightTheme, darkTheme } from '../../utils/themes';
import HomePage from '../../pages/Home';
import VideoDetails from '../../pages/VideoDetails/VideoDetails.component';
import Layout from '../Layout';
import { Context } from '../../utils/store/Store';
import AuthPage from '../../pages/AuthPage/AuthPage.page';
import FavoritesList from '../FavoritesList/FavoritesList.component';
import FavoritesDetails from '../FavoritesDetails/FavoritesDetails.component';


const App = () => {
  const state = useContext(Context)[0];

  let routes;

  if (state.isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/favorites/:videoId">
          <FavoritesDetails />
        </Route>
        <Route path="/favorites">
          <FavoritesList />
        </Route>
        <Route path="/videoDetails/:videoId">
          <VideoDetails />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/favorites/:videoId">
          <FavoritesDetails />
        </Route>
        <Route path="/favorites">
          <FavoritesList />
        </Route>
        <Route path="/videoDetails/:videoId">
          <VideoDetails />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

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

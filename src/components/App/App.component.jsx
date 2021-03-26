import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import HomePage from '../../pages/Home';
import Layout from '../Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <HomePage />
      </Layout>
    </BrowserRouter>
  );
}

export default App;

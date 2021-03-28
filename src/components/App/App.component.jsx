import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import HomePage from '../../pages/Home';
import Layout from '../Layout';

const App = () => {
  const [queryFromSeacrhInput, setQueryFromSearchInput] = useState('Wizeline');

  return (
    <BrowserRouter>
      <Layout setQueryFromSearchInput={setQueryFromSearchInput}>
        <HomePage queryFromSeacrhInput={queryFromSeacrhInput} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;

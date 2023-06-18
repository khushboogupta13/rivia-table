import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserTable from './pages/UserTable/userTable';
import UserDetails from './pages/UserDetails/userDetails';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserTable />} />
          <Route path=":id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;

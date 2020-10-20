import React from 'react';

import Topbar from '../Templates/Topbar';
import Sidebar from '../Templates/Sidebar';
import Footer from '../Templates/Footer';
import Routes from './Routes';

function App() {
  return (
    <section>
      <Sidebar />
      <Topbar />
      <div className="main-content">
        <div className="container-fluid content-top-gap">
          <Routes />
        </div>
      </div>
      <Footer />
    </section >
  );
}

export default App;

import React from 'react';

import Cards from '../../Components/CardsHome';

export default props => (
  <>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb my-breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
      </ol>
    </nav>
    <div className="welcome-msg pt-3 pb-4">
      <h1>Hi <span className="text-primary">John</span>, Welcome back</h1>
      <p>Very detailed & featured admin.</p>
    </div>

    <Cards className="statistics"></Cards>

    <div className="chart">
      <div className="row">
        <div className="col-lg-6 pr-lg-2 chart-grid">
          <div className="card text-center card_border">
            <div className="card-header chart-grid__header">
              Bar Chart
          </div>
            <div className="card-body">

              <div id="container">
                <canvas id="barchart"></canvas>
              </div>

            </div>
            <div className="card-footer text-muted chart-grid__footer">
              Updated 2 hours ago
          </div>
          </div>
        </div>
        <div className="col-lg-6 pl-lg-2 chart-grid">
          <div className="card text-center card_border">
            <div className="card-header chart-grid__header">
              Line Chart
          </div>
            <div className="card-body">

              <div id="container">
                <canvas id="linechart"></canvas>
              </div>

            </div>
            <div className="card-footer text-muted chart-grid__footer">
              Updated just now
          </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
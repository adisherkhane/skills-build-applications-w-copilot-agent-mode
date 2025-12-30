import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import OctofitLogo from './components/OctofitLogo';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <div>
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
              <Link className="navbar-brand d-flex align-items-center" to="/">
                <OctofitLogo />
                <span className="ms-2">Octofit Tracker</span>
              </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={
            <div className="text-center">
              <h1 className="display-4 mb-4">Welcome to Octofit Tracker</h1>
              <div className="card mb-4 shadow mx-auto" style={{maxWidth: '32rem'}}>
                <div className="card-body">
                  <h5 className="card-title">Track Your Fitness Journey</h5>
                  <p className="card-text">Log activities, join teams, and compete on the leaderboard. Stay motivated and reach your goals with Octofit Tracker!</p>
                  <Link to="/activities" className="btn btn-primary">Get Started</Link>
                </div>
              </div>
            </div>
          } />
          <Route path="/activities" element={<Activities />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;


import OctofitLogo from './components/OctofitLogo';

function App() {
  return (
    <div>
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-octofit shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <OctofitLogo />
            <span className="ms-2">Octofit Tracker</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Activities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        {/* Bootstrap Heading */}
        <h1 className="display-4 mb-4 text-center">Welcome to Octofit Tracker</h1>

        {/* Bootstrap Card */}
        <div className="card mb-4 shadow">
          <div className="card-body">
            <h5 className="card-title">Track Your Fitness Journey</h5>
            <p className="card-text">Log activities, join teams, and compete on the leaderboard. Stay motivated and reach your goals with Octofit Tracker!</p>
            <a href="#" className="btn btn-primary">Get Started</a>
          </div>
        </div>

        {/* Bootstrap Table Example */}
        <h2 className="h4 mb-3">Sample Activity Data</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Date</th>
                <th>Activity</th>
                <th>Duration (min)</th>
                <th>Calories</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025-12-30</td>
                <td>Running</td>
                <td>30</td>
                <td>300</td>
                <td><button className="btn btn-sm btn-info">View</button></td>
              </tr>
              <tr>
                <td>2025-12-29</td>
                <td>Cycling</td>
                <td>45</td>
                <td>400</td>
                <td><button className="btn btn-sm btn-info">View</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bootstrap Modal Example (static) */}
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{background: 'rgba(0,0,0,0.1)'}} aria-modal="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Welcome Modal</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>This is a sample Bootstrap modal. You can use modals for notifications, forms, and more.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        import React from 'react';
        import { Routes, Route, Link } from 'react-router-dom';
        import OctofitLogo from './components/OctofitLogo';
        import Activities from './components/Activities';
        import Leaderboard from './components/Leaderboard';
        import Teams from './components/Teams';
        import Users from './components/Users';
        import Workouts from './components/Workouts';

        function App() {
          return (
            <div>
              {/* Bootstrap Navigation */}
              <nav className="navbar navbar-expand-lg navbar-dark bg-octofit shadow-sm">
                <div className="container-fluid">
                  <Link className="navbar-brand d-flex align-items-center" to="/">
                    <OctofitLogo />
                    <span className="ms-2">Octofit Tracker</span>
                  </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to="/activities">Activities</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/teams">Teams</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/workouts">Workouts</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

              <div className="container mt-5">
                <Routes>
                  <Route path="/" element={<h1 className="display-4 mb-4 text-center">Welcome to Octofit Tracker</h1>} />
                  <Route path="/activities" element={<Activities />} />
                  <Route path="/teams" element={<Teams />} />
                  <Route path="/leaderboard" element={<Leaderboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/workouts" element={<Workouts />} />
                </Routes>
              </div>
            </div>
          );
        }

        export default App;

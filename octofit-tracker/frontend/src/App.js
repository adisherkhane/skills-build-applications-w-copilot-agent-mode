

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

        {/* Bootstrap Form Example */}
        <h2 className="h4 mt-5 mb-3">Log a New Activity</h2>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="activityType" className="form-label">Activity Type</label>
            <input type="text" className="form-control" id="activityType" placeholder="e.g. Running" />
          </div>
          <div className="col-md-3">
            <label htmlFor="duration" className="form-label">Duration (min)</label>
            <input type="number" className="form-control" id="duration" placeholder="30" />
          </div>
          <div className="col-md-3">
            <label htmlFor="calories" className="form-label">Calories</label>
            <input type="number" className="form-control" id="calories" placeholder="300" />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success">Add Activity</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

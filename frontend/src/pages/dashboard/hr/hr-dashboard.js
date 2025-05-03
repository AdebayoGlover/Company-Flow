import loading from '../../../components/common/loading/loading.js';
import auth from '../../../services/auth.js';

export default function HRDashboard() {
  return `
      <div class="dashboard hr-dashboard">
          <h2>HR Dashboard</h2>
          <div class="dashboard-grid">
              <div class="dashboard-card">
                  <h3>Employee Overview</h3>
                  <!-- HR specific metrics -->
              </div>
              <div class="dashboard-card">
                  <h3>Recruitment Status</h3>
                  <!-- Recruitment widgets -->
              </div>
              <div class="dashboard-card">
                  <h3>Training Programs</h3>
                  <!-- Training metrics -->
              </div>
          </div>
      </div>
  `;
}

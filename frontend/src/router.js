import loading from './components/common/loading/loading.js';
import auth from './services/auth.js';

const router = {
  routes: {
    // Base routes
    '/': 'dashboard/admin/admin-dashboard',
    '/login': 'auth/login/login',
    '/register': 'auth/register/register',
    '/logout': 'auth/logout/logout',

    // Department-specific dashboards
    '/dashboard/hr': 'dashboard/hr/hr-dashboard',
    '/dashboard/finance': 'dashboard/finance/finance-dashboard',
    '/dashboard/operations': 'dashboard/operations/operations-dashboard',
    '/dashboard/admin': 'dashboard/admin/admin-dashboard',

    // Common routes
    '/employees': 'employees/employees',
    '/departments': 'departments/departments',
    '/settings': 'settings/settings',
  },

  init() {
    // Initialize router on page load
    window.addEventListener('DOMContentLoaded', () => {
      // Get current path
      const currentPath = window.location.pathname;

      // If at root or not authenticated, go to login
      if (currentPath === '/' || !auth.isAuthenticated()) {
        this.navigateTo('/login');
      } else {
        this.handleRoute();
      }

      // Handle browser back/forward buttons
      window.addEventListener('popstate', () => this.handleRoute());

      // Handle navigation links
      document.addEventListener('click', (e) => {
        if (e.target.matches('[data-route]')) {
          e.preventDefault();
          const route = e.target.getAttribute('data-route');
          this.navigateTo(route);
        }
      });
    });
  },

  async handleRoute() {
    const path = window.location.pathname;

    try {
      loading.show();

      // Handle root path
      if (path === '/') {
        this.navigateTo('/login');
        return;
      }

      // Get route path
      const routePath = this.routes[path];
      if (!routePath) {
        throw new Error('Route not found');
      }

      console.log('Loading module:', routePath); // Debug log

      // Load and render page
      const module = await import(`./pages/${routePath}.js`);
      const mainContent = document.getElementById('app');

      // Clear existing content
      mainContent.innerHTML = '';

      // Render new content
      const content = module.default();
      mainContent.innerHTML = content;

      console.log('Page rendered:', path); // Debug log
    } catch (error) {
      console.error('Route handling error:', error);
      const mainContent = document.getElementById('app');
      mainContent.innerHTML = `
        <div class="error-page">
          <h2>Page Not Found</h2>
          <p>Please try logging in again.</p>
          <a href="/login" data-route="/login">Go to Login</a>
        </div>
      `;
    } finally {
      loading.hide();
    }
  },

  navigateTo(route) {
    console.log('Navigating to:', route); // Debug log
    window.history.pushState({}, '', route);
    this.handleRoute();
  },
};

export default router;

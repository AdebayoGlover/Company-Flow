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
    window.addEventListener('DOMContentLoaded', () => {
      // Handle initial route
      const currentPath = window.location.pathname;
      const publicRoutes = ['/login', '/register'];

      if (!auth.isAuthenticated() && !publicRoutes.includes(currentPath)) {
        this.navigateTo('/login');
      } else if (
        auth.isAuthenticated() &&
        (currentPath === '/' || currentPath === '/login')
      ) {
        // Redirect authenticated users to their dashboard
        const department = auth.getUserDepartment();
        this.navigateTo(`/dashboard/${department}`);
      } else {
        this.handleRoute();
      }

      // Handle navigation events
      document.addEventListener('click', (e) => {
        if (e.target.matches('[data-route]')) {
          e.preventDefault();
          const route = e.target.getAttribute('data-route');
          this.navigateTo(route);
        }
      });

      // Handle browser back/forward
      window.addEventListener('popstate', () => this.handleRoute());
    });
  },

  async handleRoute() {
    const path = window.location.pathname;
    const publicRoutes = ['/login', '/register'];

    try {
      loading.show();

      // Auth check for protected routes
      if (!publicRoutes.includes(path) && !auth.isAuthenticated()) {
        this.navigateTo('/login');
        return;
      }

      // Get route path
      const routePath = this.routes[path];
      if (!routePath) {
        throw new Error('Route not found');
      }

      // Load and render page
      const module = await import(`./pages/${routePath}.js`);
      const mainContent = document.getElementById('app');
      mainContent.innerHTML = '';
      const content = module.default();
      mainContent.innerHTML = content;
    } catch (error) {
      console.error('Route handling error:', error);
      const mainContent = document.getElementById('app');
      mainContent.innerHTML = `
        <div class="error-page">
          <h2>Page Not Found</h2>
          <p>${
            !auth.isAuthenticated()
              ? 'Please log in to continue.'
              : 'The page you requested was not found.'
          }</p>
          <a href="/login" data-route="/login">Go to Login</a>
        </div>
      `;
    } finally {
      loading.hide();
    }
  },

  navigateTo(route) {
    window.history.pushState({}, '', route);
    this.handleRoute();
  },
};

export default router;

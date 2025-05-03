import loading from '../../../components/common/loading/loading.js';
import auth from '../../../services/auth.js';

const Login = () => {
  const initializeLogin = () => {
    const form = document.getElementById('loginForm');
    if (form) {
      form.addEventListener('submit', handleSubmit);
    }
  };

  const handleSubmit = async (e) => {
    loading.show();
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const credentials = Object.fromEntries(formData.entries());
      
      const result = await auth.login(credentials);
      if (result.success) {
        const department = result.user.department.toLowerCase();
        window.location.href = `/dashboard/${department}`;
      } else {
        const errorDiv = document.getElementById('login-error');
        if (errorDiv) {
          errorDiv.textContent = result.error;
          errorDiv.style.display = 'block';
        }
      }
    } finally {
      loading.hide();
    }
  };

  setTimeout(initializeLogin, 0);

  return `
    <article class="auth-container">
      <h1>Login</h1>
      <form id="loginForm" class="auth-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required>
        </div>
        <div id="login-error" class="error-message"></div>
        <button type="submit" class="btn-primary">Login</button>
        <p class="auth-link">
          Don't have an account? <a href="/register" data-route="/register">Register</a>
        </p>
      </form>
    </article>
  `;
};

export default Login;
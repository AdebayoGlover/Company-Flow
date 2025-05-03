import auth from '../../../services/auth.js';

export default function Register() {
    // Add event listener after DOM content loads
    setTimeout(() => {
        const form = document.getElementById('registerForm');
        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const formData = new FormData(form);
                const userData = Object.fromEntries(formData.entries());
                
                const result = await auth.register(userData);
                if (result.success) {
                    window.location.href = `/dashboard/${userData.department}`;
                } else {
                    const errorDiv = document.getElementById('register-error');
                    if (errorDiv) {
                        errorDiv.textContent = result.error;
                        errorDiv.style.display = 'block';
                    }
                }
            });
        }
    }, 0);

    return `
        <div class="auth-container">
            <h2>Create Account</h2>
            <form id="registerForm" class="auth-form">
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required>
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <div class="form-group">
                    <label for="department">Department</label>
                    <select id="department" name="department" required>
                        <option value="">Select Department</option>
                        <option value="hr">Human Resources</option>
                        <option value="finance">Finance</option>
                        <option value="operations">Operations</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div id="register-error" class="error-message"></div>
                <button type="submit" class="btn-primary">Register</button>
                <p class="auth-link">
                    Already have an account? <a href="/login" data-route="/login">Login</a>
                </p>
            </form>
        </div>
    `;
}
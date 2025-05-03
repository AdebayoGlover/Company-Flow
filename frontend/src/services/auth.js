const auth = {
  isAuthenticated() {
    return !!localStorage.getItem('user');
  },

  getUserDepartment() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.department?.toLowerCase() || 'login';
  },

  async register(userData) {
    try {
      console.log('Registration attempt:', { ...userData, password: '[HIDDEN]' });
      
      // Enhanced validation
      if (!userData.firstName || !userData.lastName || !userData.email || 
          !userData.password || !userData.department) {
        return {
          success: false,
          error: 'Please fill in all required fields'
        };
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userData.email)) {
        return {
          success: false,
          error: 'Please enter a valid email address'
        };
      }

      // Check if user already exists
      const existingUser = localStorage.getItem('user');
      if (existingUser) {
        const user = JSON.parse(existingUser);
        if (user.email === userData.email) {
          return {
            success: false,
            error: 'Email already registered',
          };
        }
      }

      // Create new user
      const newUser = {
        ...userData,
        id: Date.now(),
        created: new Date().toISOString(),
      };

      // Store user data
      localStorage.setItem('user', JSON.stringify(newUser));
      return { success: true, user: newUser };
    } catch (error) {
      console.error('Registration failed:', error);
      return {
        success: false,
        error: error.message,
      };
    }
  },

  async login(credentials) {
    try {
      // Basic validation
      if (!credentials.email || !credentials.password) {
        return {
          success: false,
          error: 'Please provide both email and password',
        };
      }

      // Get stored user
      const storedUserData = localStorage.getItem('user');
      if (!storedUserData) {
        return {
          success: false,
          error: 'No user found with this email',
        };
      }

      const storedUser = JSON.parse(storedUserData);

      // Check credentials
      if (
        storedUser.email === credentials.email &&
        storedUser.password === credentials.password
      ) {
        return {
          success: true,
          user: storedUser,
        };
      }

      return {
        success: false,
        error: 'Invalid email or password',
      };
    } catch (error) {
      console.error('Login failed:', error);
      return {
        success: false,
        error: 'Login failed. Please try again.',
      };
    }
  },

  logout() {
    localStorage.removeItem('user');
    window.location.href = '/login';
  },
};

export default auth;

# Company Flow Coding Standards

## JavaScript Standards

### 1. File Organization
- One class/component per file
- Use ES6 modules (import/export)
- Follow the established folder structure

### 2. Naming Conventions
- Components: PascalCase (e.g., `HRDashboard.js`)
- Functions/variables: camelCase (e.g., `getUserData`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`)
- Files: kebab-case (e.g., `user-service.js`)

### 3. Code Formatting
- Use 2 spaces for indentation
- Use semicolons at the end of statements
- Use single quotes for strings
- Add spaces around operators

### 4. JavaScript Best Practices
- Use `const` by default, `let` when needed
- Use arrow functions by default
- Use function keyword only when needed:
  - Constructor functions
  - Generator functions
  - Methods that need their own 'this' binding
- Avoid global variables
- Use async/await for promises
- Add error handling for all async operations

### 5. Component Structure
```javascript
// Imports
import authService from '../services/auth.js';

// Component
const ComponentName = () => {
  // State initialization
  const state = {
    data: null,
    isLoading: true
  };
  
  // Event handlers
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Implementation
  };
  
  // Initialization
  setTimeout(() => {
    // Init logic
  }, 0);
  
  return `
    <article class="component">
      <h1>Component Title</h1>
    </article>
  `;
};

export default ComponentName;
```

### 6. Class Implementation
```javascript
class ServiceClass {
  constructor() {
    this.state = {};
  }

  // Use function keyword for class methods (when 'this' binding is needed)
  async fetchData() {
    try {
      const response = await fetch('/api/data');
      return response.json();
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
      throw error;
    }
  }

  // Use arrow functions for callbacks to preserve 'this'
  handleResponse = (response) => {
    this.state.data = response;
  };
}

const serviceInstance = new ServiceClass();
export default serviceInstance;
```

### 7. Event Handlers
```javascript
// In components
const handleClick = (event) => {
  event.preventDefault();
  // Handler logic
};

// In event listeners
document.addEventListener('click', (e) => {
  if (e.target.matches('[data-action]')) {
    // Action logic
  }
});
```

## CSS Standards

### 1. Organization
- Use CSS variables for theming
- Follow BEM naming convention
- Component-specific styles in component files

### 2. Naming
```css
/* Block */
.card {}

/* Element */
.card__title {}

/* Modifier */
.card--featured {}
```

### 3. Best Practices
- Mobile-first responsive design
- Use flexbox/grid for layouts
- Avoid !important
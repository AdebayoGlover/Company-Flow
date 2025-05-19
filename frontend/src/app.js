import loading from './components/common/loading/loading.js';
import router from './router.js';
import store from './store.js';

class App {
  constructor() {
    this.init = this.init.bind(this);
  }

  init = async () => {
    loading.show();

    try {
      await this.initializeApp();
      
      // Initialize store first
      store.init();
      
      // Then initialize router
      router.init();
      
    } catch (error) {
      console.error(`Application initialization failed: ${error.message}`);
      const errorContainer = document.getElementById('error-container');
      if (errorContainer) {
        errorContainer.innerHTML = `
          <div class="error-message">
            Failed to initialize application. Please refresh the page.
          </div>
        `;
      }
    } finally {
      loading.hide();
    }
  };

  initializeApp = async () => {
    // Add any necessary initialization logic
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };
}

const app = new App();
export default app;

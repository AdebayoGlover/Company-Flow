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
      loading.hide();

      // Initialize router and store
      router.init();
      store.init();
    } catch (error) {
      console.error(`Application initialization failed: ${error.message}`);
      loading.hide();
    }
  };

  initializeApp = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };
}

const app = new App();
export default app;

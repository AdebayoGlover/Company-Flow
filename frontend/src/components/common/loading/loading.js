class Loading {
  constructor() {
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show = () => {
    const loader = document.querySelector('.loading-container');
    loader?.classList.remove('hidden');
  };

  hide = () => {
    const loader = document.querySelector('.loading-container');
    loader?.classList.add('hidden');
  };
}

const loading = new Loading();
export default loading;

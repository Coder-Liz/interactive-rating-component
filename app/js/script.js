(() => {
  const RatingComponent = {
    el: null,
    initialStateEl: null,
    finishedStateEl: null,
    numberEls: null,
    submitEl: null,
    ratingEl: null,
    rating: null,

    initialize() {
      this.el = document.querySelector('#rating-state');
      this.initialStateEl = document.querySelector('#rating-state');
      this.finishedStateEl = document.querySelector('#thank-you-state');
      this.numberEls = document.querySelectorAll('.rating__number-btn');
      this.submitEl = document.querySelector('.rating__submit-btn');
      this.ratingEl = document.querySelector('.finish-rating__number-selected');

      this.connectEvents();
    },

    connectEvents() {
      this.numberEls.forEach((el, index) => {
        el.addEventListener('click', this.setRating.bind(this, index + 1));
      });

      this.submitEl.addEventListener('click', this.submitRating.bind(this));
    },

    setRating(value) {
      this.rating = value;
      this.numberEls.forEach((el, index) => {
        if (index === value - 1) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    },

    submitRating() {
      this.ratingEl.innerText = `${this.rating}`;

      this.initialStateEl.style.display = 'none';
      this.finishedStateEl.style.display = 'flex';
    },
  };

  RatingComponent.initialize();
})();

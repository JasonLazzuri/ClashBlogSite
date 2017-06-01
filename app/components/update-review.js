import Ember from 'ember';

export default Ember.Component.extend({
  updateReviewForm: false,
  actions: {
    updateReviewForm() {
      this.set('updateReviewForm', true);
    },
    updateReview(review) {
      var params = {
        author: this.get('author'),
        rating: this.get('rating'),
        content: this.get('content'),
      };
      this.set('updateReviewForm', false);
      this.sendAction('updateReview', review, params);
    }
  }
});

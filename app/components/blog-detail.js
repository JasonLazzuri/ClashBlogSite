import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(blog) {
      if (confirm('Are you sure you want to delete this blog?')) {
        this.sendAction('destroyBlog', blog);
      }
    },
    destroyReview(review) {
     this.sendAction('destroyReview', review);
   }
  }
});

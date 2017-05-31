import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogForm: false,
  actions: {
    updateBlogForm() {
      this.set('updateBlogForm', true);
    },
    update(blog) {
      var params = {
        author: this.get('author'),
        blogpost: this.get('blogpost'),
        image: this.get('image'),

      };
      this.set('updateBlogForm', false);
      this.sendAction('update', blog, params);
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('blog', params.blog_id);
    },
    actions: {
      update(blog, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            blog.set(key,params[key]);
          }
        });
        blog.save();
        this.transitionTo('index');
      },
      destroyBlog(blog) {
        var review_deletions = blog.get('reviews').map(function(review) {
          return review.destroyRecord();
        });
        Ember.RSVP.all(review_deletions).then(function() {
          return blog.destroyRecord();
        });
        this.transitionTo('index');
      },
      destroyReview(review) {
        review.destroyRecord();
        this.transitionTo('index');
      },
      update(review, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            review.set(key,params[key]);
          }
        });
        review.save();
        this.transitionTo('index');
      },
      saveReview(params) {
       var newReview = this.store.createRecord('review', params);
       var blog = params.blog;
       blog.get('reviews').addObject(newReview);
       newReview.save().then(function() {
         return blog.save();
       });
       this.transitionTo('blog', blog);
     }
    }
  });

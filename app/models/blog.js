import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  blogpost: DS.attr(),
  image: DS.attr()
});

//= require_self
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./views
//= require_tree ./helpers
//= require_tree ./templates

Photoblog = Ember.Application.create({
  store: DS.Store.create({
    revision: 4,
    adapter: DS.RESTAdapter.create({
      bulkCommit: false,
    })
  })
});

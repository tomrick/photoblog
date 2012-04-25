// This is a manifest file that'll be compled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require ember
//= require ember-data
//= require ember/photoblog
//= require_tree .

$(function() {
  var photos = Photoblog.store.find(Photoblog.Photo);

  Photoblog.photosController.set('content', photos);

  Photoblog.getPath('store.adapter').mappings = {
    comments: Photoblog.Comment
  };

  Photoblog.stateManager.goToState('photos.index');

  Photoblog.photosView = Ember.ContainerView.create({
    currentViewBinding: 'Photoblog.stateManager.currentState.view'
  });

  Photoblog.photosView.append();
});

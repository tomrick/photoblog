var get = Ember.get;

Ember.ContainerView.reopen({
  currentView: null,

  currentViewWillChange: Ember.beforeObserver(function() {
    var childViews = get(this, 'childViews'),
        currentView = get(this, 'currentView');

    if (currentView) {
      childViews.removeObject(currentView);
    }
  }, 'currentView'),

  currentViewDidChange: Ember.observer(function() {
    var childViews = get(this, 'childViews'),
        currentView = get(this, 'currentView');

    if (currentView) {
      childViews.pushObject(currentView);
    }
  }, 'currentView')
});


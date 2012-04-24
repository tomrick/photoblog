Photoblog.stateManager = Ember.StateManager.create({
  initialState: 'photos',

  states: {
    photos: Ember.State.create({
      initialState: 'index',

      index: Ember.State.create({
        view: Photoblog.IndexView.create(),

        showCreate: function(manager) {
          manager.goToState('create');
        }
      }),

      create: Ember.State.create({
        view: Photoblog.CreateView.create(),

        enter: function(manager) {
          var transaction = Photoblog.store.transaction();
          var photo = transaction.createRecord(Photoblog.Photo);

          Photoblog.photoController.set('content', photo);
          manager.set('transaction', transaction);
        },

        save: function(manager) {
          var transaction = manager.get('transaction');
          transaction.commit();

          manager.goToState('index');
        },

        cancel: function(manager) {
          var transaction = manager.get('transaction');
          transaction.rollback();

          manager.goToState('index');
        }
      })
    })
  }
});

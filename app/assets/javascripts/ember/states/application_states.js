Photoblog.stateManager = Ember.StateManager.create({
  states: {
    photos: Ember.State.create({
      index: Ember.State.create({
        templateName: 'ember/templates/photos/index',
        controller: 'Photoblog.photosController',

        showCreate: function(manager) {
          manager.goToState('create');
        }
      }),

      create: Ember.State.create({
        templateName: 'ember/templates/photos/create',
        controller: 'Photoblog.photoController',

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

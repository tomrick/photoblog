Photoblog.stateManager = Ember.StateManager.create({
  initialState: 'photos',

  states: {
    photos: Ember.State.create({
      initialState: 'index',

      index: Ember.State.create({
        view: Photoblog.IndexView.create(),

        showCreate: function(manager) {
          manager.goToState('create');
        },

        showEdit: function(manager, evt) {
          var photo = evt.context;
          Photoblog.photoController.set('content', photo);

          manager.goToState('edit');
        },

        addComment: function(manager, evt) {
          var view = evt.view;
          var transaction = Photoblog.store.transaction();
          var comment = transaction.createRecord(Photoblog.Comment, {
            text: "booyakasha"
          });

          view.setProperties({
            transaction: transaction,
            comment: comment,
            isEditing: true
          });
        },

        saveComment: function(manager, evt) {
          var view = evt.view;
          var transaction = view.get('transaction');
          var comment = view.get('comment');
          var photo = evt.context;

		  // Dirty hack. Will need to change for Ember.VIEW_PRESERVES_CONTEXT
          photo.get('content').get('comments').pushObject(comment);

          transaction.commit();
          view.set('isEditing', false);
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
      }),

      edit: Ember.State.create({
        view: Photoblog.EditView.create(),

        enter: function(manager) {
          var transaction = Photoblog.store.transaction();
          var photo = Photoblog.photoController.get('content');
          transaction.add(photo);

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

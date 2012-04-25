Photoblog.Comment = DS.Model.extend({
  text: DS.attr('string'),
  photo: DS.belongsTo('Photoblog.Photo')
});

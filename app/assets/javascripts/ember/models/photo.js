Photoblog.Photo = DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  comments: DS.hasMany('Photoblog.Comment')
});

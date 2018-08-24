
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('resources').insert({
      id: 1,
      url: 'http://www.musicresource.com',
      title: 'Music Resource',
      description: 'A site of tutorials where you can learn about music.',
      user_id: 3,
      topic_id: 1
    }),
    knex('resources').insert({
      id: 2,
      url: 'http://www.healthandwellness.com',
      title: 'Health and Wellness blog',
      description: 'A blog about health and wellness',
      user_id: 1,
      topic_id: 4
    }),
    knex('resources').insert({
      id: 3,
      url: 'http://www.writersblog.com',
      title: 'Writer\'s Blog',
      description: 'A blog all about writing.',
      user_id: 2,
      topic_id: 2
    }),
    knex('resources').insert({
      id: 4,
      url: 'http://www.youtube.com/engineeringvideo',
      title: 'Engineering 101',
      description: 'A video about the fundamentals of engineering.',
      user_id: 1,
      topic_id: 3
    }),
    knex.raw('ALTER SEQUENCE resources_id_seq RESTART WITH 5')
  ]);
};

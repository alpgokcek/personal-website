const routes = require('next-routes');

module.exports = routes()
    .add('about')
    .add('blog', '/blog/:slug')
    .add('user', '/user/:id', 'profile')
    .add('/:noname/:lang(en|es)/:wow+', 'complex')
    .add({name: 'beta', pattern: '/v3', page: 'v3'});
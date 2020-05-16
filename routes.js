const pages = require('./controller');
module.exports = (app) => {
    app.get('/', pages.firstPage);
    app.get('/bakedgoods', pages.indexPage);
    app.get('/bakedgoods/new', pages.newPage);
    app.get('/bakedgoods/:id', pages.showPage );
    app.post('/bakedgoods', pages.createCake);
    app.delete('/bakedgoods/all', pages.deleteAll);
    app.delete('/bakedgoods/:id', pages.deleteCake);
    app.put('/bakedgoods/:id', pages.updateCake);
    app.get('/bakedgoods/:id/edit', pages.editPage);
}

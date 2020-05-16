const bakedGoods = require('./models/bakedgoods.js');
const pages = {
    firstPage: (req, res) => {
        res.render('first.ejs')
    },
    indexPage: (req, res) => {
        res.render('index.ejs', { bakedGoods: bakedGoods })
    },
    showPage: (req, res) => {
        const currentCake = bakedGoods[req.params.id];
        res.render('show.ejs', { cake: currentCake, id: req.params.id });
    },
    newPage: (req, res) => {
        res.render('new.ejs')
    },
    createCake: (req, res) => {
        bakedGoods.push(req.body);
        res.redirect('/');
    },
    deleteAll: (req, res) => {
        bakedGoods.splice(0, bakedGoods.length);
        res.redirect('/bakedgoods');
    },
    deleteCake: (req, res) => {
        bakedGoods.splice(req.params.ind, 1); //remove the item from the array
        res.redirect('/bakedgoods'); //redirect back to index route
    },
    updateCake: (req, res) => {
        bakedGoods[req.params.id] = req.body; 
        res.redirect('/bakedgoods'); //redirect to the index page
    },
    editPage: (req, res) => {
        res.render(
            'edit.ejs',
            {
                cake: bakedGoods[req.params.id], 
                index: req.params.id
            }
        );
    }
};
module.exports = pages;
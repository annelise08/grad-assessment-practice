const Item = require('../models/toDoModel')

const toDoController = {
    getItems(req, res, next){
        console.log('in to do controller')
        Item.find({}).exec()
        .then((items) => {
            console.log(items)
            res.locals.items = items;
            return next();
        })
        .catch((err) => {
            console.log('error in getItems controller')
            return next(err);
        })
    },

    deleteItems(req, res, next){
        const { item } = req.body;
        Item.findOneAndDelete({item: item}).exec()
        .then((item) => {
            console.log(item);
            return next();
        })
        .catch(err => {
            return next(err)})
    }
}

module.exports = toDoController;
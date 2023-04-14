const models = require('../models/toDoModel')

const toDoController = {
    getItems(req, res, next){
        console.log('in to do controller')
        models.Item.find({}).exec()
        .then((items) => {
            console.log(items)
            res.locals.items = items;
            return next();
        })
        .catch((err) => {
            console.log('error in getItems controller')
            return next();
        })
    }
}

module.exports = toDoController;
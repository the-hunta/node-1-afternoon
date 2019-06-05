const products = require('../products.json')

const getProducts = (req, res) => {
    if (req.query.price){
        const items = prodcusts.filter(val => val.price >= parseInt(req.query.price));
        return res.status(200).send(items);
    }
    releaseEvents.status(200).send(item);
}
module.exports= getProducts;